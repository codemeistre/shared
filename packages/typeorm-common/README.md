# typeorm-common

Expose some useful TypeORM integrations.

## Installation

```bash
npm i @codemeistre/typeorm-common

yarn add @codemeistre/typeorm-common

```

## Usage

### NestJs

As TypeORM ^0.3.0 do not support custom repositories, [here's a workaround](https://gist.github.com/anchan828/9e569f076e7bc18daf21c652f7c3d012) to continue using the same interface. This package is based on it.

#### `@CustomRepository(Entity)`

Similarly to `@EntityRepository()`, it should be used in the repository class.

```ts
@CustomRepository(FooEntity)
export class FooRepository extends Repository<FooEntity> {}
```

#### `CustomRepositoryModule.forFeature([Repositories])`

Similarly to `@TypeOrmModule.forFeature()`, it should be used in the resource module.

```ts
@Module({
  imports: [CustomRepositoryModule.forFeature([FooRepository])],
  exports: [CustomRepositoryModule],
})
export class FooModule {}
```

**_IMPORTANT_**: As we are not using `TypeORmModule.forFeature()`, we must provide the entities manually in `entities` when starting the TypeOrmModule, so `autoLoadEntities` **_will not work!_**.

```ts
@Module({
  imports: [
    TypeOrmModule.forRoot({
      entities: [FooEntity],
      ...
    }),
  ]
})
export class DatabaseModule {}
```
