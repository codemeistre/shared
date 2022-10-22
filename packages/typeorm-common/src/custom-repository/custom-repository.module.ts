import { DynamicModule, Provider } from '@nestjs/common';
import { getDataSourceToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { REGISTER_CUSTOM_REPOSITORY_METADATA } from './custom-repository.decorator';

export class CustomRepositoryModule {
  /**
   * Register the given custom repositories.
   *
   * See {@link https://gist.github.com/anchan828/9e569f076e7bc18daf21c652f7c3d012}
   */
  static forFeature<T extends Constructor<any>>(repositories: T[]): DynamicModule {
    const providers = repositories.map((Repository): Provider => {
      const entity = Reflect.getMetadata(REGISTER_CUSTOM_REPOSITORY_METADATA, Repository) as T;

      return {
        inject: [getDataSourceToken()],
        provide: Repository,
        useFactory: (dataSource: DataSource): typeof Repository => {
          const baseRepository = dataSource.getRepository<typeof Repository>(entity);

          const customRepository = new Repository(baseRepository.target, baseRepository.manager);

          /**
           * This is a workaround to use `typeorm-transactional` lib properly
           *
           * See {@link https://github.com/Aliheym/typeorm-transactional/issues/8#issuecomment-1247338076}
           */
          Object.defineProperty(customRepository, 'manager', {
            get() {
              return baseRepository.manager;
            },
          });

          return customRepository;
        },
      };
    });

    return {
      module: CustomRepositoryModule,
      providers,
      exports: providers,
    };
  }
}
