import { SetMetadata } from '@nestjs/common';

export const REGISTER_CUSTOM_REPOSITORY_METADATA =
  'codemeistre/typeorm-common:CUSTOM_REPOSITORY_METADATA';

/**
 * Register the metadata of the given Entity for later injection of its custom
 * repository.
 *
 * See {@link https://gist.github.com/anchan828/9e569f076e7bc18daf21c652f7c3d012}
 */
export function CustomRepository(entity: Constructor): ClassDecorator {
  return SetMetadata(REGISTER_CUSTOM_REPOSITORY_METADATA, entity);
}
