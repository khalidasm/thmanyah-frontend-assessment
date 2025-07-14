
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Podcast
 * 
 */
export type Podcast = $Result.DefaultSelection<Prisma.$PodcastPayload>
/**
 * Model Genre
 * 
 */
export type Genre = $Result.DefaultSelection<Prisma.$GenrePayload>
/**
 * Model Episode
 * 
 */
export type Episode = $Result.DefaultSelection<Prisma.$EpisodePayload>
/**
 * Model SearchHistory
 * 
 */
export type SearchHistory = $Result.DefaultSelection<Prisma.$SearchHistoryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Podcasts
 * const podcasts = await prisma.podcast.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Podcasts
   * const podcasts = await prisma.podcast.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.podcast`: Exposes CRUD operations for the **Podcast** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Podcasts
    * const podcasts = await prisma.podcast.findMany()
    * ```
    */
  get podcast(): Prisma.PodcastDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.genre`: Exposes CRUD operations for the **Genre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genre.findMany()
    * ```
    */
  get genre(): Prisma.GenreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.episode`: Exposes CRUD operations for the **Episode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Episodes
    * const episodes = await prisma.episode.findMany()
    * ```
    */
  get episode(): Prisma.EpisodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.searchHistory`: Exposes CRUD operations for the **SearchHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SearchHistories
    * const searchHistories = await prisma.searchHistory.findMany()
    * ```
    */
  get searchHistory(): Prisma.SearchHistoryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Podcast: 'Podcast',
    Genre: 'Genre',
    Episode: 'Episode',
    SearchHistory: 'SearchHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "podcast" | "genre" | "episode" | "searchHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Podcast: {
        payload: Prisma.$PodcastPayload<ExtArgs>
        fields: Prisma.PodcastFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PodcastFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PodcastPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PodcastFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PodcastPayload>
          }
          findFirst: {
            args: Prisma.PodcastFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PodcastPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PodcastFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PodcastPayload>
          }
          findMany: {
            args: Prisma.PodcastFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PodcastPayload>[]
          }
          create: {
            args: Prisma.PodcastCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PodcastPayload>
          }
          createMany: {
            args: Prisma.PodcastCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PodcastCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PodcastPayload>[]
          }
          delete: {
            args: Prisma.PodcastDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PodcastPayload>
          }
          update: {
            args: Prisma.PodcastUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PodcastPayload>
          }
          deleteMany: {
            args: Prisma.PodcastDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PodcastUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PodcastUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PodcastPayload>[]
          }
          upsert: {
            args: Prisma.PodcastUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PodcastPayload>
          }
          aggregate: {
            args: Prisma.PodcastAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePodcast>
          }
          groupBy: {
            args: Prisma.PodcastGroupByArgs<ExtArgs>
            result: $Utils.Optional<PodcastGroupByOutputType>[]
          }
          count: {
            args: Prisma.PodcastCountArgs<ExtArgs>
            result: $Utils.Optional<PodcastCountAggregateOutputType> | number
          }
        }
      }
      Genre: {
        payload: Prisma.$GenrePayload<ExtArgs>
        fields: Prisma.GenreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findFirst: {
            args: Prisma.GenreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findMany: {
            args: Prisma.GenreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          create: {
            args: Prisma.GenreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          createMany: {
            args: Prisma.GenreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GenreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          delete: {
            args: Prisma.GenreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          update: {
            args: Prisma.GenreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          deleteMany: {
            args: Prisma.GenreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GenreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GenreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          upsert: {
            args: Prisma.GenreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          aggregate: {
            args: Prisma.GenreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenre>
          }
          groupBy: {
            args: Prisma.GenreGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenreGroupByOutputType>[]
          }
          count: {
            args: Prisma.GenreCountArgs<ExtArgs>
            result: $Utils.Optional<GenreCountAggregateOutputType> | number
          }
        }
      }
      Episode: {
        payload: Prisma.$EpisodePayload<ExtArgs>
        fields: Prisma.EpisodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EpisodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EpisodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          findFirst: {
            args: Prisma.EpisodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EpisodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          findMany: {
            args: Prisma.EpisodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>[]
          }
          create: {
            args: Prisma.EpisodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          createMany: {
            args: Prisma.EpisodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EpisodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>[]
          }
          delete: {
            args: Prisma.EpisodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          update: {
            args: Prisma.EpisodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          deleteMany: {
            args: Prisma.EpisodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EpisodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EpisodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>[]
          }
          upsert: {
            args: Prisma.EpisodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          aggregate: {
            args: Prisma.EpisodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEpisode>
          }
          groupBy: {
            args: Prisma.EpisodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EpisodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EpisodeCountArgs<ExtArgs>
            result: $Utils.Optional<EpisodeCountAggregateOutputType> | number
          }
        }
      }
      SearchHistory: {
        payload: Prisma.$SearchHistoryPayload<ExtArgs>
        fields: Prisma.SearchHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SearchHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SearchHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchHistoryPayload>
          }
          findFirst: {
            args: Prisma.SearchHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SearchHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchHistoryPayload>
          }
          findMany: {
            args: Prisma.SearchHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchHistoryPayload>[]
          }
          create: {
            args: Prisma.SearchHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchHistoryPayload>
          }
          createMany: {
            args: Prisma.SearchHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SearchHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchHistoryPayload>[]
          }
          delete: {
            args: Prisma.SearchHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchHistoryPayload>
          }
          update: {
            args: Prisma.SearchHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchHistoryPayload>
          }
          deleteMany: {
            args: Prisma.SearchHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SearchHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SearchHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchHistoryPayload>[]
          }
          upsert: {
            args: Prisma.SearchHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchHistoryPayload>
          }
          aggregate: {
            args: Prisma.SearchHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSearchHistory>
          }
          groupBy: {
            args: Prisma.SearchHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SearchHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SearchHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<SearchHistoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    podcast?: PodcastOmit
    genre?: GenreOmit
    episode?: EpisodeOmit
    searchHistory?: SearchHistoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PodcastCountOutputType
   */

  export type PodcastCountOutputType = {
    genres: number
    episodes: number
  }

  export type PodcastCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genres?: boolean | PodcastCountOutputTypeCountGenresArgs
    episodes?: boolean | PodcastCountOutputTypeCountEpisodesArgs
  }

  // Custom InputTypes
  /**
   * PodcastCountOutputType without action
   */
  export type PodcastCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PodcastCountOutputType
     */
    select?: PodcastCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PodcastCountOutputType without action
   */
  export type PodcastCountOutputTypeCountGenresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenreWhereInput
  }

  /**
   * PodcastCountOutputType without action
   */
  export type PodcastCountOutputTypeCountEpisodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EpisodeWhereInput
  }


  /**
   * Count Type GenreCountOutputType
   */

  export type GenreCountOutputType = {
    podcasts: number
  }

  export type GenreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    podcasts?: boolean | GenreCountOutputTypeCountPodcastsArgs
  }

  // Custom InputTypes
  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreCountOutputType
     */
    select?: GenreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeCountPodcastsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PodcastWhereInput
  }


  /**
   * Count Type SearchHistoryCountOutputType
   */

  export type SearchHistoryCountOutputType = {
    podcasts: number
  }

  export type SearchHistoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    podcasts?: boolean | SearchHistoryCountOutputTypeCountPodcastsArgs
  }

  // Custom InputTypes
  /**
   * SearchHistoryCountOutputType without action
   */
  export type SearchHistoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistoryCountOutputType
     */
    select?: SearchHistoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SearchHistoryCountOutputType without action
   */
  export type SearchHistoryCountOutputTypeCountPodcastsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PodcastWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Podcast
   */

  export type AggregatePodcast = {
    _count: PodcastCountAggregateOutputType | null
    _avg: PodcastAvgAggregateOutputType | null
    _sum: PodcastSumAggregateOutputType | null
    _min: PodcastMinAggregateOutputType | null
    _max: PodcastMaxAggregateOutputType | null
  }

  export type PodcastAvgAggregateOutputType = {
    collectionId: number | null
    trackId: number | null
    trackTimeMillis: number | null
    artistId: number | null
    collectionPrice: number | null
    trackPrice: number | null
    collectionHdPrice: number | null
    trackHdPrice: number | null
    trackHdRentalPrice: number | null
    trackCount: number | null
  }

  export type PodcastSumAggregateOutputType = {
    collectionId: number | null
    trackId: number | null
    trackTimeMillis: number | null
    artistId: number | null
    collectionPrice: number | null
    trackPrice: number | null
    collectionHdPrice: number | null
    trackHdPrice: number | null
    trackHdRentalPrice: number | null
    trackCount: number | null
  }

  export type PodcastMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    collectionId: number | null
    trackId: number | null
    artistName: string | null
    collectionName: string | null
    trackName: string | null
    collectionViewUrl: string | null
    feedUrl: string | null
    artworkUrl30: string | null
    artworkUrl60: string | null
    artworkUrl100: string | null
    artworkUrl600: string | null
    releaseDate: Date | null
    trackTimeMillis: number | null
    country: string | null
    currency: string | null
    primaryGenreName: string | null
    contentAdvisoryRating: string | null
    artworkUrl30_2x: string | null
    artworkUrl60_2x: string | null
    artworkUrl100_2x: string | null
    artworkUrl600_2x: string | null
    artistViewUrl: string | null
    trackCensoredName: string | null
    collectionCensoredName: string | null
    artistId: number | null
    collectionPrice: number | null
    trackPrice: number | null
    collectionHdPrice: number | null
    trackHdPrice: number | null
    trackHdRentalPrice: number | null
    collectionExplicitness: string | null
    trackExplicitness: string | null
    trackCount: number | null
    copyright: string | null
    description: string | null
    shortDescription: string | null
    longDescription: string | null
    searchHistoryId: string | null
  }

  export type PodcastMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    collectionId: number | null
    trackId: number | null
    artistName: string | null
    collectionName: string | null
    trackName: string | null
    collectionViewUrl: string | null
    feedUrl: string | null
    artworkUrl30: string | null
    artworkUrl60: string | null
    artworkUrl100: string | null
    artworkUrl600: string | null
    releaseDate: Date | null
    trackTimeMillis: number | null
    country: string | null
    currency: string | null
    primaryGenreName: string | null
    contentAdvisoryRating: string | null
    artworkUrl30_2x: string | null
    artworkUrl60_2x: string | null
    artworkUrl100_2x: string | null
    artworkUrl600_2x: string | null
    artistViewUrl: string | null
    trackCensoredName: string | null
    collectionCensoredName: string | null
    artistId: number | null
    collectionPrice: number | null
    trackPrice: number | null
    collectionHdPrice: number | null
    trackHdPrice: number | null
    trackHdRentalPrice: number | null
    collectionExplicitness: string | null
    trackExplicitness: string | null
    trackCount: number | null
    copyright: string | null
    description: string | null
    shortDescription: string | null
    longDescription: string | null
    searchHistoryId: string | null
  }

  export type PodcastCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    collectionId: number
    trackId: number
    artistName: number
    collectionName: number
    trackName: number
    collectionViewUrl: number
    feedUrl: number
    artworkUrl30: number
    artworkUrl60: number
    artworkUrl100: number
    artworkUrl600: number
    releaseDate: number
    trackTimeMillis: number
    country: number
    currency: number
    primaryGenreName: number
    contentAdvisoryRating: number
    artworkUrl30_2x: number
    artworkUrl60_2x: number
    artworkUrl100_2x: number
    artworkUrl600_2x: number
    artistViewUrl: number
    trackCensoredName: number
    collectionCensoredName: number
    artistId: number
    collectionPrice: number
    trackPrice: number
    collectionHdPrice: number
    trackHdPrice: number
    trackHdRentalPrice: number
    collectionExplicitness: number
    trackExplicitness: number
    trackCount: number
    copyright: number
    description: number
    shortDescription: number
    longDescription: number
    searchHistoryId: number
    _all: number
  }


  export type PodcastAvgAggregateInputType = {
    collectionId?: true
    trackId?: true
    trackTimeMillis?: true
    artistId?: true
    collectionPrice?: true
    trackPrice?: true
    collectionHdPrice?: true
    trackHdPrice?: true
    trackHdRentalPrice?: true
    trackCount?: true
  }

  export type PodcastSumAggregateInputType = {
    collectionId?: true
    trackId?: true
    trackTimeMillis?: true
    artistId?: true
    collectionPrice?: true
    trackPrice?: true
    collectionHdPrice?: true
    trackHdPrice?: true
    trackHdRentalPrice?: true
    trackCount?: true
  }

  export type PodcastMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    collectionId?: true
    trackId?: true
    artistName?: true
    collectionName?: true
    trackName?: true
    collectionViewUrl?: true
    feedUrl?: true
    artworkUrl30?: true
    artworkUrl60?: true
    artworkUrl100?: true
    artworkUrl600?: true
    releaseDate?: true
    trackTimeMillis?: true
    country?: true
    currency?: true
    primaryGenreName?: true
    contentAdvisoryRating?: true
    artworkUrl30_2x?: true
    artworkUrl60_2x?: true
    artworkUrl100_2x?: true
    artworkUrl600_2x?: true
    artistViewUrl?: true
    trackCensoredName?: true
    collectionCensoredName?: true
    artistId?: true
    collectionPrice?: true
    trackPrice?: true
    collectionHdPrice?: true
    trackHdPrice?: true
    trackHdRentalPrice?: true
    collectionExplicitness?: true
    trackExplicitness?: true
    trackCount?: true
    copyright?: true
    description?: true
    shortDescription?: true
    longDescription?: true
    searchHistoryId?: true
  }

  export type PodcastMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    collectionId?: true
    trackId?: true
    artistName?: true
    collectionName?: true
    trackName?: true
    collectionViewUrl?: true
    feedUrl?: true
    artworkUrl30?: true
    artworkUrl60?: true
    artworkUrl100?: true
    artworkUrl600?: true
    releaseDate?: true
    trackTimeMillis?: true
    country?: true
    currency?: true
    primaryGenreName?: true
    contentAdvisoryRating?: true
    artworkUrl30_2x?: true
    artworkUrl60_2x?: true
    artworkUrl100_2x?: true
    artworkUrl600_2x?: true
    artistViewUrl?: true
    trackCensoredName?: true
    collectionCensoredName?: true
    artistId?: true
    collectionPrice?: true
    trackPrice?: true
    collectionHdPrice?: true
    trackHdPrice?: true
    trackHdRentalPrice?: true
    collectionExplicitness?: true
    trackExplicitness?: true
    trackCount?: true
    copyright?: true
    description?: true
    shortDescription?: true
    longDescription?: true
    searchHistoryId?: true
  }

  export type PodcastCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    collectionId?: true
    trackId?: true
    artistName?: true
    collectionName?: true
    trackName?: true
    collectionViewUrl?: true
    feedUrl?: true
    artworkUrl30?: true
    artworkUrl60?: true
    artworkUrl100?: true
    artworkUrl600?: true
    releaseDate?: true
    trackTimeMillis?: true
    country?: true
    currency?: true
    primaryGenreName?: true
    contentAdvisoryRating?: true
    artworkUrl30_2x?: true
    artworkUrl60_2x?: true
    artworkUrl100_2x?: true
    artworkUrl600_2x?: true
    artistViewUrl?: true
    trackCensoredName?: true
    collectionCensoredName?: true
    artistId?: true
    collectionPrice?: true
    trackPrice?: true
    collectionHdPrice?: true
    trackHdPrice?: true
    trackHdRentalPrice?: true
    collectionExplicitness?: true
    trackExplicitness?: true
    trackCount?: true
    copyright?: true
    description?: true
    shortDescription?: true
    longDescription?: true
    searchHistoryId?: true
    _all?: true
  }

  export type PodcastAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Podcast to aggregate.
     */
    where?: PodcastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Podcasts to fetch.
     */
    orderBy?: PodcastOrderByWithRelationInput | PodcastOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PodcastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Podcasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Podcasts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Podcasts
    **/
    _count?: true | PodcastCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PodcastAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PodcastSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PodcastMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PodcastMaxAggregateInputType
  }

  export type GetPodcastAggregateType<T extends PodcastAggregateArgs> = {
        [P in keyof T & keyof AggregatePodcast]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePodcast[P]>
      : GetScalarType<T[P], AggregatePodcast[P]>
  }




  export type PodcastGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PodcastWhereInput
    orderBy?: PodcastOrderByWithAggregationInput | PodcastOrderByWithAggregationInput[]
    by: PodcastScalarFieldEnum[] | PodcastScalarFieldEnum
    having?: PodcastScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PodcastCountAggregateInputType | true
    _avg?: PodcastAvgAggregateInputType
    _sum?: PodcastSumAggregateInputType
    _min?: PodcastMinAggregateInputType
    _max?: PodcastMaxAggregateInputType
  }

  export type PodcastGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    collectionId: number
    trackId: number
    artistName: string | null
    collectionName: string
    trackName: string
    collectionViewUrl: string | null
    feedUrl: string | null
    artworkUrl30: string | null
    artworkUrl60: string | null
    artworkUrl100: string | null
    artworkUrl600: string | null
    releaseDate: Date | null
    trackTimeMillis: number | null
    country: string | null
    currency: string | null
    primaryGenreName: string | null
    contentAdvisoryRating: string | null
    artworkUrl30_2x: string | null
    artworkUrl60_2x: string | null
    artworkUrl100_2x: string | null
    artworkUrl600_2x: string | null
    artistViewUrl: string | null
    trackCensoredName: string | null
    collectionCensoredName: string | null
    artistId: number | null
    collectionPrice: number | null
    trackPrice: number | null
    collectionHdPrice: number | null
    trackHdPrice: number | null
    trackHdRentalPrice: number | null
    collectionExplicitness: string | null
    trackExplicitness: string | null
    trackCount: number | null
    copyright: string | null
    description: string | null
    shortDescription: string | null
    longDescription: string | null
    searchHistoryId: string | null
    _count: PodcastCountAggregateOutputType | null
    _avg: PodcastAvgAggregateOutputType | null
    _sum: PodcastSumAggregateOutputType | null
    _min: PodcastMinAggregateOutputType | null
    _max: PodcastMaxAggregateOutputType | null
  }

  type GetPodcastGroupByPayload<T extends PodcastGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PodcastGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PodcastGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PodcastGroupByOutputType[P]>
            : GetScalarType<T[P], PodcastGroupByOutputType[P]>
        }
      >
    >


  export type PodcastSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    collectionId?: boolean
    trackId?: boolean
    artistName?: boolean
    collectionName?: boolean
    trackName?: boolean
    collectionViewUrl?: boolean
    feedUrl?: boolean
    artworkUrl30?: boolean
    artworkUrl60?: boolean
    artworkUrl100?: boolean
    artworkUrl600?: boolean
    releaseDate?: boolean
    trackTimeMillis?: boolean
    country?: boolean
    currency?: boolean
    primaryGenreName?: boolean
    contentAdvisoryRating?: boolean
    artworkUrl30_2x?: boolean
    artworkUrl60_2x?: boolean
    artworkUrl100_2x?: boolean
    artworkUrl600_2x?: boolean
    artistViewUrl?: boolean
    trackCensoredName?: boolean
    collectionCensoredName?: boolean
    artistId?: boolean
    collectionPrice?: boolean
    trackPrice?: boolean
    collectionHdPrice?: boolean
    trackHdPrice?: boolean
    trackHdRentalPrice?: boolean
    collectionExplicitness?: boolean
    trackExplicitness?: boolean
    trackCount?: boolean
    copyright?: boolean
    description?: boolean
    shortDescription?: boolean
    longDescription?: boolean
    searchHistoryId?: boolean
    searchHistory?: boolean | Podcast$searchHistoryArgs<ExtArgs>
    genres?: boolean | Podcast$genresArgs<ExtArgs>
    episodes?: boolean | Podcast$episodesArgs<ExtArgs>
    _count?: boolean | PodcastCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["podcast"]>

  export type PodcastSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    collectionId?: boolean
    trackId?: boolean
    artistName?: boolean
    collectionName?: boolean
    trackName?: boolean
    collectionViewUrl?: boolean
    feedUrl?: boolean
    artworkUrl30?: boolean
    artworkUrl60?: boolean
    artworkUrl100?: boolean
    artworkUrl600?: boolean
    releaseDate?: boolean
    trackTimeMillis?: boolean
    country?: boolean
    currency?: boolean
    primaryGenreName?: boolean
    contentAdvisoryRating?: boolean
    artworkUrl30_2x?: boolean
    artworkUrl60_2x?: boolean
    artworkUrl100_2x?: boolean
    artworkUrl600_2x?: boolean
    artistViewUrl?: boolean
    trackCensoredName?: boolean
    collectionCensoredName?: boolean
    artistId?: boolean
    collectionPrice?: boolean
    trackPrice?: boolean
    collectionHdPrice?: boolean
    trackHdPrice?: boolean
    trackHdRentalPrice?: boolean
    collectionExplicitness?: boolean
    trackExplicitness?: boolean
    trackCount?: boolean
    copyright?: boolean
    description?: boolean
    shortDescription?: boolean
    longDescription?: boolean
    searchHistoryId?: boolean
    searchHistory?: boolean | Podcast$searchHistoryArgs<ExtArgs>
  }, ExtArgs["result"]["podcast"]>

  export type PodcastSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    collectionId?: boolean
    trackId?: boolean
    artistName?: boolean
    collectionName?: boolean
    trackName?: boolean
    collectionViewUrl?: boolean
    feedUrl?: boolean
    artworkUrl30?: boolean
    artworkUrl60?: boolean
    artworkUrl100?: boolean
    artworkUrl600?: boolean
    releaseDate?: boolean
    trackTimeMillis?: boolean
    country?: boolean
    currency?: boolean
    primaryGenreName?: boolean
    contentAdvisoryRating?: boolean
    artworkUrl30_2x?: boolean
    artworkUrl60_2x?: boolean
    artworkUrl100_2x?: boolean
    artworkUrl600_2x?: boolean
    artistViewUrl?: boolean
    trackCensoredName?: boolean
    collectionCensoredName?: boolean
    artistId?: boolean
    collectionPrice?: boolean
    trackPrice?: boolean
    collectionHdPrice?: boolean
    trackHdPrice?: boolean
    trackHdRentalPrice?: boolean
    collectionExplicitness?: boolean
    trackExplicitness?: boolean
    trackCount?: boolean
    copyright?: boolean
    description?: boolean
    shortDescription?: boolean
    longDescription?: boolean
    searchHistoryId?: boolean
    searchHistory?: boolean | Podcast$searchHistoryArgs<ExtArgs>
  }, ExtArgs["result"]["podcast"]>

  export type PodcastSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    collectionId?: boolean
    trackId?: boolean
    artistName?: boolean
    collectionName?: boolean
    trackName?: boolean
    collectionViewUrl?: boolean
    feedUrl?: boolean
    artworkUrl30?: boolean
    artworkUrl60?: boolean
    artworkUrl100?: boolean
    artworkUrl600?: boolean
    releaseDate?: boolean
    trackTimeMillis?: boolean
    country?: boolean
    currency?: boolean
    primaryGenreName?: boolean
    contentAdvisoryRating?: boolean
    artworkUrl30_2x?: boolean
    artworkUrl60_2x?: boolean
    artworkUrl100_2x?: boolean
    artworkUrl600_2x?: boolean
    artistViewUrl?: boolean
    trackCensoredName?: boolean
    collectionCensoredName?: boolean
    artistId?: boolean
    collectionPrice?: boolean
    trackPrice?: boolean
    collectionHdPrice?: boolean
    trackHdPrice?: boolean
    trackHdRentalPrice?: boolean
    collectionExplicitness?: boolean
    trackExplicitness?: boolean
    trackCount?: boolean
    copyright?: boolean
    description?: boolean
    shortDescription?: boolean
    longDescription?: boolean
    searchHistoryId?: boolean
  }

  export type PodcastOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "collectionId" | "trackId" | "artistName" | "collectionName" | "trackName" | "collectionViewUrl" | "feedUrl" | "artworkUrl30" | "artworkUrl60" | "artworkUrl100" | "artworkUrl600" | "releaseDate" | "trackTimeMillis" | "country" | "currency" | "primaryGenreName" | "contentAdvisoryRating" | "artworkUrl30_2x" | "artworkUrl60_2x" | "artworkUrl100_2x" | "artworkUrl600_2x" | "artistViewUrl" | "trackCensoredName" | "collectionCensoredName" | "artistId" | "collectionPrice" | "trackPrice" | "collectionHdPrice" | "trackHdPrice" | "trackHdRentalPrice" | "collectionExplicitness" | "trackExplicitness" | "trackCount" | "copyright" | "description" | "shortDescription" | "longDescription" | "searchHistoryId", ExtArgs["result"]["podcast"]>
  export type PodcastInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    searchHistory?: boolean | Podcast$searchHistoryArgs<ExtArgs>
    genres?: boolean | Podcast$genresArgs<ExtArgs>
    episodes?: boolean | Podcast$episodesArgs<ExtArgs>
    _count?: boolean | PodcastCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PodcastIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    searchHistory?: boolean | Podcast$searchHistoryArgs<ExtArgs>
  }
  export type PodcastIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    searchHistory?: boolean | Podcast$searchHistoryArgs<ExtArgs>
  }

  export type $PodcastPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Podcast"
    objects: {
      searchHistory: Prisma.$SearchHistoryPayload<ExtArgs> | null
      genres: Prisma.$GenrePayload<ExtArgs>[]
      episodes: Prisma.$EpisodePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      collectionId: number
      trackId: number
      artistName: string | null
      collectionName: string
      trackName: string
      collectionViewUrl: string | null
      feedUrl: string | null
      artworkUrl30: string | null
      artworkUrl60: string | null
      artworkUrl100: string | null
      artworkUrl600: string | null
      releaseDate: Date | null
      trackTimeMillis: number | null
      country: string | null
      currency: string | null
      primaryGenreName: string | null
      contentAdvisoryRating: string | null
      artworkUrl30_2x: string | null
      artworkUrl60_2x: string | null
      artworkUrl100_2x: string | null
      artworkUrl600_2x: string | null
      artistViewUrl: string | null
      trackCensoredName: string | null
      collectionCensoredName: string | null
      artistId: number | null
      collectionPrice: number | null
      trackPrice: number | null
      collectionHdPrice: number | null
      trackHdPrice: number | null
      trackHdRentalPrice: number | null
      collectionExplicitness: string | null
      trackExplicitness: string | null
      trackCount: number | null
      copyright: string | null
      description: string | null
      shortDescription: string | null
      longDescription: string | null
      searchHistoryId: string | null
    }, ExtArgs["result"]["podcast"]>
    composites: {}
  }

  type PodcastGetPayload<S extends boolean | null | undefined | PodcastDefaultArgs> = $Result.GetResult<Prisma.$PodcastPayload, S>

  type PodcastCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PodcastFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PodcastCountAggregateInputType | true
    }

  export interface PodcastDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Podcast'], meta: { name: 'Podcast' } }
    /**
     * Find zero or one Podcast that matches the filter.
     * @param {PodcastFindUniqueArgs} args - Arguments to find a Podcast
     * @example
     * // Get one Podcast
     * const podcast = await prisma.podcast.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PodcastFindUniqueArgs>(args: SelectSubset<T, PodcastFindUniqueArgs<ExtArgs>>): Prisma__PodcastClient<$Result.GetResult<Prisma.$PodcastPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Podcast that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PodcastFindUniqueOrThrowArgs} args - Arguments to find a Podcast
     * @example
     * // Get one Podcast
     * const podcast = await prisma.podcast.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PodcastFindUniqueOrThrowArgs>(args: SelectSubset<T, PodcastFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PodcastClient<$Result.GetResult<Prisma.$PodcastPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Podcast that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PodcastFindFirstArgs} args - Arguments to find a Podcast
     * @example
     * // Get one Podcast
     * const podcast = await prisma.podcast.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PodcastFindFirstArgs>(args?: SelectSubset<T, PodcastFindFirstArgs<ExtArgs>>): Prisma__PodcastClient<$Result.GetResult<Prisma.$PodcastPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Podcast that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PodcastFindFirstOrThrowArgs} args - Arguments to find a Podcast
     * @example
     * // Get one Podcast
     * const podcast = await prisma.podcast.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PodcastFindFirstOrThrowArgs>(args?: SelectSubset<T, PodcastFindFirstOrThrowArgs<ExtArgs>>): Prisma__PodcastClient<$Result.GetResult<Prisma.$PodcastPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Podcasts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PodcastFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Podcasts
     * const podcasts = await prisma.podcast.findMany()
     * 
     * // Get first 10 Podcasts
     * const podcasts = await prisma.podcast.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const podcastWithIdOnly = await prisma.podcast.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PodcastFindManyArgs>(args?: SelectSubset<T, PodcastFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PodcastPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Podcast.
     * @param {PodcastCreateArgs} args - Arguments to create a Podcast.
     * @example
     * // Create one Podcast
     * const Podcast = await prisma.podcast.create({
     *   data: {
     *     // ... data to create a Podcast
     *   }
     * })
     * 
     */
    create<T extends PodcastCreateArgs>(args: SelectSubset<T, PodcastCreateArgs<ExtArgs>>): Prisma__PodcastClient<$Result.GetResult<Prisma.$PodcastPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Podcasts.
     * @param {PodcastCreateManyArgs} args - Arguments to create many Podcasts.
     * @example
     * // Create many Podcasts
     * const podcast = await prisma.podcast.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PodcastCreateManyArgs>(args?: SelectSubset<T, PodcastCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Podcasts and returns the data saved in the database.
     * @param {PodcastCreateManyAndReturnArgs} args - Arguments to create many Podcasts.
     * @example
     * // Create many Podcasts
     * const podcast = await prisma.podcast.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Podcasts and only return the `id`
     * const podcastWithIdOnly = await prisma.podcast.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PodcastCreateManyAndReturnArgs>(args?: SelectSubset<T, PodcastCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PodcastPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Podcast.
     * @param {PodcastDeleteArgs} args - Arguments to delete one Podcast.
     * @example
     * // Delete one Podcast
     * const Podcast = await prisma.podcast.delete({
     *   where: {
     *     // ... filter to delete one Podcast
     *   }
     * })
     * 
     */
    delete<T extends PodcastDeleteArgs>(args: SelectSubset<T, PodcastDeleteArgs<ExtArgs>>): Prisma__PodcastClient<$Result.GetResult<Prisma.$PodcastPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Podcast.
     * @param {PodcastUpdateArgs} args - Arguments to update one Podcast.
     * @example
     * // Update one Podcast
     * const podcast = await prisma.podcast.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PodcastUpdateArgs>(args: SelectSubset<T, PodcastUpdateArgs<ExtArgs>>): Prisma__PodcastClient<$Result.GetResult<Prisma.$PodcastPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Podcasts.
     * @param {PodcastDeleteManyArgs} args - Arguments to filter Podcasts to delete.
     * @example
     * // Delete a few Podcasts
     * const { count } = await prisma.podcast.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PodcastDeleteManyArgs>(args?: SelectSubset<T, PodcastDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Podcasts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PodcastUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Podcasts
     * const podcast = await prisma.podcast.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PodcastUpdateManyArgs>(args: SelectSubset<T, PodcastUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Podcasts and returns the data updated in the database.
     * @param {PodcastUpdateManyAndReturnArgs} args - Arguments to update many Podcasts.
     * @example
     * // Update many Podcasts
     * const podcast = await prisma.podcast.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Podcasts and only return the `id`
     * const podcastWithIdOnly = await prisma.podcast.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PodcastUpdateManyAndReturnArgs>(args: SelectSubset<T, PodcastUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PodcastPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Podcast.
     * @param {PodcastUpsertArgs} args - Arguments to update or create a Podcast.
     * @example
     * // Update or create a Podcast
     * const podcast = await prisma.podcast.upsert({
     *   create: {
     *     // ... data to create a Podcast
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Podcast we want to update
     *   }
     * })
     */
    upsert<T extends PodcastUpsertArgs>(args: SelectSubset<T, PodcastUpsertArgs<ExtArgs>>): Prisma__PodcastClient<$Result.GetResult<Prisma.$PodcastPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Podcasts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PodcastCountArgs} args - Arguments to filter Podcasts to count.
     * @example
     * // Count the number of Podcasts
     * const count = await prisma.podcast.count({
     *   where: {
     *     // ... the filter for the Podcasts we want to count
     *   }
     * })
    **/
    count<T extends PodcastCountArgs>(
      args?: Subset<T, PodcastCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PodcastCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Podcast.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PodcastAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PodcastAggregateArgs>(args: Subset<T, PodcastAggregateArgs>): Prisma.PrismaPromise<GetPodcastAggregateType<T>>

    /**
     * Group by Podcast.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PodcastGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PodcastGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PodcastGroupByArgs['orderBy'] }
        : { orderBy?: PodcastGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PodcastGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPodcastGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Podcast model
   */
  readonly fields: PodcastFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Podcast.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PodcastClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    searchHistory<T extends Podcast$searchHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Podcast$searchHistoryArgs<ExtArgs>>): Prisma__SearchHistoryClient<$Result.GetResult<Prisma.$SearchHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    genres<T extends Podcast$genresArgs<ExtArgs> = {}>(args?: Subset<T, Podcast$genresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    episodes<T extends Podcast$episodesArgs<ExtArgs> = {}>(args?: Subset<T, Podcast$episodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Podcast model
   */
  interface PodcastFieldRefs {
    readonly id: FieldRef<"Podcast", 'String'>
    readonly createdAt: FieldRef<"Podcast", 'DateTime'>
    readonly updatedAt: FieldRef<"Podcast", 'DateTime'>
    readonly collectionId: FieldRef<"Podcast", 'Int'>
    readonly trackId: FieldRef<"Podcast", 'Int'>
    readonly artistName: FieldRef<"Podcast", 'String'>
    readonly collectionName: FieldRef<"Podcast", 'String'>
    readonly trackName: FieldRef<"Podcast", 'String'>
    readonly collectionViewUrl: FieldRef<"Podcast", 'String'>
    readonly feedUrl: FieldRef<"Podcast", 'String'>
    readonly artworkUrl30: FieldRef<"Podcast", 'String'>
    readonly artworkUrl60: FieldRef<"Podcast", 'String'>
    readonly artworkUrl100: FieldRef<"Podcast", 'String'>
    readonly artworkUrl600: FieldRef<"Podcast", 'String'>
    readonly releaseDate: FieldRef<"Podcast", 'DateTime'>
    readonly trackTimeMillis: FieldRef<"Podcast", 'Int'>
    readonly country: FieldRef<"Podcast", 'String'>
    readonly currency: FieldRef<"Podcast", 'String'>
    readonly primaryGenreName: FieldRef<"Podcast", 'String'>
    readonly contentAdvisoryRating: FieldRef<"Podcast", 'String'>
    readonly artworkUrl30_2x: FieldRef<"Podcast", 'String'>
    readonly artworkUrl60_2x: FieldRef<"Podcast", 'String'>
    readonly artworkUrl100_2x: FieldRef<"Podcast", 'String'>
    readonly artworkUrl600_2x: FieldRef<"Podcast", 'String'>
    readonly artistViewUrl: FieldRef<"Podcast", 'String'>
    readonly trackCensoredName: FieldRef<"Podcast", 'String'>
    readonly collectionCensoredName: FieldRef<"Podcast", 'String'>
    readonly artistId: FieldRef<"Podcast", 'Int'>
    readonly collectionPrice: FieldRef<"Podcast", 'Float'>
    readonly trackPrice: FieldRef<"Podcast", 'Float'>
    readonly collectionHdPrice: FieldRef<"Podcast", 'Float'>
    readonly trackHdPrice: FieldRef<"Podcast", 'Float'>
    readonly trackHdRentalPrice: FieldRef<"Podcast", 'Float'>
    readonly collectionExplicitness: FieldRef<"Podcast", 'String'>
    readonly trackExplicitness: FieldRef<"Podcast", 'String'>
    readonly trackCount: FieldRef<"Podcast", 'Int'>
    readonly copyright: FieldRef<"Podcast", 'String'>
    readonly description: FieldRef<"Podcast", 'String'>
    readonly shortDescription: FieldRef<"Podcast", 'String'>
    readonly longDescription: FieldRef<"Podcast", 'String'>
    readonly searchHistoryId: FieldRef<"Podcast", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Podcast findUnique
   */
  export type PodcastFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Podcast
     */
    select?: PodcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Podcast
     */
    omit?: PodcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PodcastInclude<ExtArgs> | null
    /**
     * Filter, which Podcast to fetch.
     */
    where: PodcastWhereUniqueInput
  }

  /**
   * Podcast findUniqueOrThrow
   */
  export type PodcastFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Podcast
     */
    select?: PodcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Podcast
     */
    omit?: PodcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PodcastInclude<ExtArgs> | null
    /**
     * Filter, which Podcast to fetch.
     */
    where: PodcastWhereUniqueInput
  }

  /**
   * Podcast findFirst
   */
  export type PodcastFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Podcast
     */
    select?: PodcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Podcast
     */
    omit?: PodcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PodcastInclude<ExtArgs> | null
    /**
     * Filter, which Podcast to fetch.
     */
    where?: PodcastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Podcasts to fetch.
     */
    orderBy?: PodcastOrderByWithRelationInput | PodcastOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Podcasts.
     */
    cursor?: PodcastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Podcasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Podcasts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Podcasts.
     */
    distinct?: PodcastScalarFieldEnum | PodcastScalarFieldEnum[]
  }

  /**
   * Podcast findFirstOrThrow
   */
  export type PodcastFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Podcast
     */
    select?: PodcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Podcast
     */
    omit?: PodcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PodcastInclude<ExtArgs> | null
    /**
     * Filter, which Podcast to fetch.
     */
    where?: PodcastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Podcasts to fetch.
     */
    orderBy?: PodcastOrderByWithRelationInput | PodcastOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Podcasts.
     */
    cursor?: PodcastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Podcasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Podcasts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Podcasts.
     */
    distinct?: PodcastScalarFieldEnum | PodcastScalarFieldEnum[]
  }

  /**
   * Podcast findMany
   */
  export type PodcastFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Podcast
     */
    select?: PodcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Podcast
     */
    omit?: PodcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PodcastInclude<ExtArgs> | null
    /**
     * Filter, which Podcasts to fetch.
     */
    where?: PodcastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Podcasts to fetch.
     */
    orderBy?: PodcastOrderByWithRelationInput | PodcastOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Podcasts.
     */
    cursor?: PodcastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Podcasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Podcasts.
     */
    skip?: number
    distinct?: PodcastScalarFieldEnum | PodcastScalarFieldEnum[]
  }

  /**
   * Podcast create
   */
  export type PodcastCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Podcast
     */
    select?: PodcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Podcast
     */
    omit?: PodcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PodcastInclude<ExtArgs> | null
    /**
     * The data needed to create a Podcast.
     */
    data: XOR<PodcastCreateInput, PodcastUncheckedCreateInput>
  }

  /**
   * Podcast createMany
   */
  export type PodcastCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Podcasts.
     */
    data: PodcastCreateManyInput | PodcastCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Podcast createManyAndReturn
   */
  export type PodcastCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Podcast
     */
    select?: PodcastSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Podcast
     */
    omit?: PodcastOmit<ExtArgs> | null
    /**
     * The data used to create many Podcasts.
     */
    data: PodcastCreateManyInput | PodcastCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PodcastIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Podcast update
   */
  export type PodcastUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Podcast
     */
    select?: PodcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Podcast
     */
    omit?: PodcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PodcastInclude<ExtArgs> | null
    /**
     * The data needed to update a Podcast.
     */
    data: XOR<PodcastUpdateInput, PodcastUncheckedUpdateInput>
    /**
     * Choose, which Podcast to update.
     */
    where: PodcastWhereUniqueInput
  }

  /**
   * Podcast updateMany
   */
  export type PodcastUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Podcasts.
     */
    data: XOR<PodcastUpdateManyMutationInput, PodcastUncheckedUpdateManyInput>
    /**
     * Filter which Podcasts to update
     */
    where?: PodcastWhereInput
    /**
     * Limit how many Podcasts to update.
     */
    limit?: number
  }

  /**
   * Podcast updateManyAndReturn
   */
  export type PodcastUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Podcast
     */
    select?: PodcastSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Podcast
     */
    omit?: PodcastOmit<ExtArgs> | null
    /**
     * The data used to update Podcasts.
     */
    data: XOR<PodcastUpdateManyMutationInput, PodcastUncheckedUpdateManyInput>
    /**
     * Filter which Podcasts to update
     */
    where?: PodcastWhereInput
    /**
     * Limit how many Podcasts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PodcastIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Podcast upsert
   */
  export type PodcastUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Podcast
     */
    select?: PodcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Podcast
     */
    omit?: PodcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PodcastInclude<ExtArgs> | null
    /**
     * The filter to search for the Podcast to update in case it exists.
     */
    where: PodcastWhereUniqueInput
    /**
     * In case the Podcast found by the `where` argument doesn't exist, create a new Podcast with this data.
     */
    create: XOR<PodcastCreateInput, PodcastUncheckedCreateInput>
    /**
     * In case the Podcast was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PodcastUpdateInput, PodcastUncheckedUpdateInput>
  }

  /**
   * Podcast delete
   */
  export type PodcastDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Podcast
     */
    select?: PodcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Podcast
     */
    omit?: PodcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PodcastInclude<ExtArgs> | null
    /**
     * Filter which Podcast to delete.
     */
    where: PodcastWhereUniqueInput
  }

  /**
   * Podcast deleteMany
   */
  export type PodcastDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Podcasts to delete
     */
    where?: PodcastWhereInput
    /**
     * Limit how many Podcasts to delete.
     */
    limit?: number
  }

  /**
   * Podcast.searchHistory
   */
  export type Podcast$searchHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchHistory
     */
    omit?: SearchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchHistoryInclude<ExtArgs> | null
    where?: SearchHistoryWhereInput
  }

  /**
   * Podcast.genres
   */
  export type Podcast$genresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    where?: GenreWhereInput
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    cursor?: GenreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Podcast.episodes
   */
  export type Podcast$episodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    where?: EpisodeWhereInput
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    cursor?: EpisodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * Podcast without action
   */
  export type PodcastDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Podcast
     */
    select?: PodcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Podcast
     */
    omit?: PodcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PodcastInclude<ExtArgs> | null
  }


  /**
   * Model Genre
   */

  export type AggregateGenre = {
    _count: GenreCountAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  export type GenreMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GenreMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GenreCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GenreMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GenreMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GenreCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GenreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genre to aggregate.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Genres
    **/
    _count?: true | GenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenreMaxAggregateInputType
  }

  export type GetGenreAggregateType<T extends GenreAggregateArgs> = {
        [P in keyof T & keyof AggregateGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenre[P]>
      : GetScalarType<T[P], AggregateGenre[P]>
  }




  export type GenreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenreWhereInput
    orderBy?: GenreOrderByWithAggregationInput | GenreOrderByWithAggregationInput[]
    by: GenreScalarFieldEnum[] | GenreScalarFieldEnum
    having?: GenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenreCountAggregateInputType | true
    _min?: GenreMinAggregateInputType
    _max?: GenreMaxAggregateInputType
  }

  export type GenreGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: GenreCountAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  type GetGenreGroupByPayload<T extends GenreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenreGroupByOutputType[P]>
            : GetScalarType<T[P], GenreGroupByOutputType[P]>
        }
      >
    >


  export type GenreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    podcasts?: boolean | Genre$podcastsArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GenreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["genre"]>
  export type GenreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    podcasts?: boolean | Genre$podcastsArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GenreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GenreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GenrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Genre"
    objects: {
      podcasts: Prisma.$PodcastPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["genre"]>
    composites: {}
  }

  type GenreGetPayload<S extends boolean | null | undefined | GenreDefaultArgs> = $Result.GetResult<Prisma.$GenrePayload, S>

  type GenreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GenreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GenreCountAggregateInputType | true
    }

  export interface GenreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Genre'], meta: { name: 'Genre' } }
    /**
     * Find zero or one Genre that matches the filter.
     * @param {GenreFindUniqueArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GenreFindUniqueArgs>(args: SelectSubset<T, GenreFindUniqueArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Genre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GenreFindUniqueOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GenreFindUniqueOrThrowArgs>(args: SelectSubset<T, GenreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GenreFindFirstArgs>(args?: SelectSubset<T, GenreFindFirstArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GenreFindFirstOrThrowArgs>(args?: SelectSubset<T, GenreFindFirstOrThrowArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genre.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const genreWithIdOnly = await prisma.genre.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GenreFindManyArgs>(args?: SelectSubset<T, GenreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Genre.
     * @param {GenreCreateArgs} args - Arguments to create a Genre.
     * @example
     * // Create one Genre
     * const Genre = await prisma.genre.create({
     *   data: {
     *     // ... data to create a Genre
     *   }
     * })
     * 
     */
    create<T extends GenreCreateArgs>(args: SelectSubset<T, GenreCreateArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Genres.
     * @param {GenreCreateManyArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genre = await prisma.genre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GenreCreateManyArgs>(args?: SelectSubset<T, GenreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Genres and returns the data saved in the database.
     * @param {GenreCreateManyAndReturnArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genre = await prisma.genre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Genres and only return the `id`
     * const genreWithIdOnly = await prisma.genre.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GenreCreateManyAndReturnArgs>(args?: SelectSubset<T, GenreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Genre.
     * @param {GenreDeleteArgs} args - Arguments to delete one Genre.
     * @example
     * // Delete one Genre
     * const Genre = await prisma.genre.delete({
     *   where: {
     *     // ... filter to delete one Genre
     *   }
     * })
     * 
     */
    delete<T extends GenreDeleteArgs>(args: SelectSubset<T, GenreDeleteArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Genre.
     * @param {GenreUpdateArgs} args - Arguments to update one Genre.
     * @example
     * // Update one Genre
     * const genre = await prisma.genre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GenreUpdateArgs>(args: SelectSubset<T, GenreUpdateArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Genres.
     * @param {GenreDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GenreDeleteManyArgs>(args?: SelectSubset<T, GenreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GenreUpdateManyArgs>(args: SelectSubset<T, GenreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres and returns the data updated in the database.
     * @param {GenreUpdateManyAndReturnArgs} args - Arguments to update many Genres.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Genres and only return the `id`
     * const genreWithIdOnly = await prisma.genre.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GenreUpdateManyAndReturnArgs>(args: SelectSubset<T, GenreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Genre.
     * @param {GenreUpsertArgs} args - Arguments to update or create a Genre.
     * @example
     * // Update or create a Genre
     * const genre = await prisma.genre.upsert({
     *   create: {
     *     // ... data to create a Genre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genre we want to update
     *   }
     * })
     */
    upsert<T extends GenreUpsertArgs>(args: SelectSubset<T, GenreUpsertArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genre.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends GenreCountArgs>(
      args?: Subset<T, GenreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GenreAggregateArgs>(args: Subset<T, GenreAggregateArgs>): Prisma.PrismaPromise<GetGenreAggregateType<T>>

    /**
     * Group by Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenreGroupByArgs['orderBy'] }
        : { orderBy?: GenreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Genre model
   */
  readonly fields: GenreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Genre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    podcasts<T extends Genre$podcastsArgs<ExtArgs> = {}>(args?: Subset<T, Genre$podcastsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PodcastPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Genre model
   */
  interface GenreFieldRefs {
    readonly id: FieldRef<"Genre", 'String'>
    readonly name: FieldRef<"Genre", 'String'>
    readonly createdAt: FieldRef<"Genre", 'DateTime'>
    readonly updatedAt: FieldRef<"Genre", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Genre findUnique
   */
  export type GenreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre findUniqueOrThrow
   */
  export type GenreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre findFirst
   */
  export type GenreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre findFirstOrThrow
   */
  export type GenreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre findMany
   */
  export type GenreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre create
   */
  export type GenreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to create a Genre.
     */
    data: XOR<GenreCreateInput, GenreUncheckedCreateInput>
  }

  /**
   * Genre createMany
   */
  export type GenreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Genres.
     */
    data: GenreCreateManyInput | GenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genre createManyAndReturn
   */
  export type GenreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * The data used to create many Genres.
     */
    data: GenreCreateManyInput | GenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genre update
   */
  export type GenreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to update a Genre.
     */
    data: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
    /**
     * Choose, which Genre to update.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre updateMany
   */
  export type GenreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Genres.
     */
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to update.
     */
    limit?: number
  }

  /**
   * Genre updateManyAndReturn
   */
  export type GenreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * The data used to update Genres.
     */
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to update.
     */
    limit?: number
  }

  /**
   * Genre upsert
   */
  export type GenreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The filter to search for the Genre to update in case it exists.
     */
    where: GenreWhereUniqueInput
    /**
     * In case the Genre found by the `where` argument doesn't exist, create a new Genre with this data.
     */
    create: XOR<GenreCreateInput, GenreUncheckedCreateInput>
    /**
     * In case the Genre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
  }

  /**
   * Genre delete
   */
  export type GenreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter which Genre to delete.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre deleteMany
   */
  export type GenreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genres to delete
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to delete.
     */
    limit?: number
  }

  /**
   * Genre.podcasts
   */
  export type Genre$podcastsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Podcast
     */
    select?: PodcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Podcast
     */
    omit?: PodcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PodcastInclude<ExtArgs> | null
    where?: PodcastWhereInput
    orderBy?: PodcastOrderByWithRelationInput | PodcastOrderByWithRelationInput[]
    cursor?: PodcastWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PodcastScalarFieldEnum | PodcastScalarFieldEnum[]
  }

  /**
   * Genre without action
   */
  export type GenreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
  }


  /**
   * Model Episode
   */

  export type AggregateEpisode = {
    _count: EpisodeCountAggregateOutputType | null
    _avg: EpisodeAvgAggregateOutputType | null
    _sum: EpisodeSumAggregateOutputType | null
    _min: EpisodeMinAggregateOutputType | null
    _max: EpisodeMaxAggregateOutputType | null
  }

  export type EpisodeAvgAggregateOutputType = {
    duration: number | null
    enclosureLength: number | null
    itunesOrder: number | null
  }

  export type EpisodeSumAggregateOutputType = {
    duration: number | null
    enclosureLength: number | null
    itunesOrder: number | null
  }

  export type EpisodeMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    description: string | null
    podcastId: string | null
    title: string | null
    duration: number | null
    pubDate: Date | null
    guid: string | null
    enclosureUrl: string | null
    enclosureType: string | null
    enclosureLength: number | null
    itunesDuration: string | null
    itunesExplicit: boolean | null
    itunesImage: string | null
    itunesOrder: number | null
    itunesSubtitle: string | null
    itunesSummary: string | null
    itunesKeywords: string | null
    itunesAuthor: string | null
  }

  export type EpisodeMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    description: string | null
    podcastId: string | null
    title: string | null
    duration: number | null
    pubDate: Date | null
    guid: string | null
    enclosureUrl: string | null
    enclosureType: string | null
    enclosureLength: number | null
    itunesDuration: string | null
    itunesExplicit: boolean | null
    itunesImage: string | null
    itunesOrder: number | null
    itunesSubtitle: string | null
    itunesSummary: string | null
    itunesKeywords: string | null
    itunesAuthor: string | null
  }

  export type EpisodeCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    description: number
    podcastId: number
    title: number
    duration: number
    pubDate: number
    guid: number
    enclosureUrl: number
    enclosureType: number
    enclosureLength: number
    itunesDuration: number
    itunesExplicit: number
    itunesImage: number
    itunesOrder: number
    itunesSubtitle: number
    itunesSummary: number
    itunesKeywords: number
    itunesAuthor: number
    _all: number
  }


  export type EpisodeAvgAggregateInputType = {
    duration?: true
    enclosureLength?: true
    itunesOrder?: true
  }

  export type EpisodeSumAggregateInputType = {
    duration?: true
    enclosureLength?: true
    itunesOrder?: true
  }

  export type EpisodeMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    description?: true
    podcastId?: true
    title?: true
    duration?: true
    pubDate?: true
    guid?: true
    enclosureUrl?: true
    enclosureType?: true
    enclosureLength?: true
    itunesDuration?: true
    itunesExplicit?: true
    itunesImage?: true
    itunesOrder?: true
    itunesSubtitle?: true
    itunesSummary?: true
    itunesKeywords?: true
    itunesAuthor?: true
  }

  export type EpisodeMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    description?: true
    podcastId?: true
    title?: true
    duration?: true
    pubDate?: true
    guid?: true
    enclosureUrl?: true
    enclosureType?: true
    enclosureLength?: true
    itunesDuration?: true
    itunesExplicit?: true
    itunesImage?: true
    itunesOrder?: true
    itunesSubtitle?: true
    itunesSummary?: true
    itunesKeywords?: true
    itunesAuthor?: true
  }

  export type EpisodeCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    description?: true
    podcastId?: true
    title?: true
    duration?: true
    pubDate?: true
    guid?: true
    enclosureUrl?: true
    enclosureType?: true
    enclosureLength?: true
    itunesDuration?: true
    itunesExplicit?: true
    itunesImage?: true
    itunesOrder?: true
    itunesSubtitle?: true
    itunesSummary?: true
    itunesKeywords?: true
    itunesAuthor?: true
    _all?: true
  }

  export type EpisodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Episode to aggregate.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Episodes
    **/
    _count?: true | EpisodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EpisodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EpisodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EpisodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EpisodeMaxAggregateInputType
  }

  export type GetEpisodeAggregateType<T extends EpisodeAggregateArgs> = {
        [P in keyof T & keyof AggregateEpisode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEpisode[P]>
      : GetScalarType<T[P], AggregateEpisode[P]>
  }




  export type EpisodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EpisodeWhereInput
    orderBy?: EpisodeOrderByWithAggregationInput | EpisodeOrderByWithAggregationInput[]
    by: EpisodeScalarFieldEnum[] | EpisodeScalarFieldEnum
    having?: EpisodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EpisodeCountAggregateInputType | true
    _avg?: EpisodeAvgAggregateInputType
    _sum?: EpisodeSumAggregateInputType
    _min?: EpisodeMinAggregateInputType
    _max?: EpisodeMaxAggregateInputType
  }

  export type EpisodeGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    description: string | null
    podcastId: string
    title: string
    duration: number | null
    pubDate: Date | null
    guid: string | null
    enclosureUrl: string | null
    enclosureType: string | null
    enclosureLength: number | null
    itunesDuration: string | null
    itunesExplicit: boolean | null
    itunesImage: string | null
    itunesOrder: number | null
    itunesSubtitle: string | null
    itunesSummary: string | null
    itunesKeywords: string | null
    itunesAuthor: string | null
    _count: EpisodeCountAggregateOutputType | null
    _avg: EpisodeAvgAggregateOutputType | null
    _sum: EpisodeSumAggregateOutputType | null
    _min: EpisodeMinAggregateOutputType | null
    _max: EpisodeMaxAggregateOutputType | null
  }

  type GetEpisodeGroupByPayload<T extends EpisodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EpisodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EpisodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EpisodeGroupByOutputType[P]>
            : GetScalarType<T[P], EpisodeGroupByOutputType[P]>
        }
      >
    >


  export type EpisodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    description?: boolean
    podcastId?: boolean
    title?: boolean
    duration?: boolean
    pubDate?: boolean
    guid?: boolean
    enclosureUrl?: boolean
    enclosureType?: boolean
    enclosureLength?: boolean
    itunesDuration?: boolean
    itunesExplicit?: boolean
    itunesImage?: boolean
    itunesOrder?: boolean
    itunesSubtitle?: boolean
    itunesSummary?: boolean
    itunesKeywords?: boolean
    itunesAuthor?: boolean
    podcast?: boolean | PodcastDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["episode"]>

  export type EpisodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    description?: boolean
    podcastId?: boolean
    title?: boolean
    duration?: boolean
    pubDate?: boolean
    guid?: boolean
    enclosureUrl?: boolean
    enclosureType?: boolean
    enclosureLength?: boolean
    itunesDuration?: boolean
    itunesExplicit?: boolean
    itunesImage?: boolean
    itunesOrder?: boolean
    itunesSubtitle?: boolean
    itunesSummary?: boolean
    itunesKeywords?: boolean
    itunesAuthor?: boolean
    podcast?: boolean | PodcastDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["episode"]>

  export type EpisodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    description?: boolean
    podcastId?: boolean
    title?: boolean
    duration?: boolean
    pubDate?: boolean
    guid?: boolean
    enclosureUrl?: boolean
    enclosureType?: boolean
    enclosureLength?: boolean
    itunesDuration?: boolean
    itunesExplicit?: boolean
    itunesImage?: boolean
    itunesOrder?: boolean
    itunesSubtitle?: boolean
    itunesSummary?: boolean
    itunesKeywords?: boolean
    itunesAuthor?: boolean
    podcast?: boolean | PodcastDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["episode"]>

  export type EpisodeSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    description?: boolean
    podcastId?: boolean
    title?: boolean
    duration?: boolean
    pubDate?: boolean
    guid?: boolean
    enclosureUrl?: boolean
    enclosureType?: boolean
    enclosureLength?: boolean
    itunesDuration?: boolean
    itunesExplicit?: boolean
    itunesImage?: boolean
    itunesOrder?: boolean
    itunesSubtitle?: boolean
    itunesSummary?: boolean
    itunesKeywords?: boolean
    itunesAuthor?: boolean
  }

  export type EpisodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "description" | "podcastId" | "title" | "duration" | "pubDate" | "guid" | "enclosureUrl" | "enclosureType" | "enclosureLength" | "itunesDuration" | "itunesExplicit" | "itunesImage" | "itunesOrder" | "itunesSubtitle" | "itunesSummary" | "itunesKeywords" | "itunesAuthor", ExtArgs["result"]["episode"]>
  export type EpisodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    podcast?: boolean | PodcastDefaultArgs<ExtArgs>
  }
  export type EpisodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    podcast?: boolean | PodcastDefaultArgs<ExtArgs>
  }
  export type EpisodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    podcast?: boolean | PodcastDefaultArgs<ExtArgs>
  }

  export type $EpisodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Episode"
    objects: {
      podcast: Prisma.$PodcastPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      description: string | null
      podcastId: string
      title: string
      duration: number | null
      pubDate: Date | null
      guid: string | null
      enclosureUrl: string | null
      enclosureType: string | null
      enclosureLength: number | null
      itunesDuration: string | null
      itunesExplicit: boolean | null
      itunesImage: string | null
      itunesOrder: number | null
      itunesSubtitle: string | null
      itunesSummary: string | null
      itunesKeywords: string | null
      itunesAuthor: string | null
    }, ExtArgs["result"]["episode"]>
    composites: {}
  }

  type EpisodeGetPayload<S extends boolean | null | undefined | EpisodeDefaultArgs> = $Result.GetResult<Prisma.$EpisodePayload, S>

  type EpisodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EpisodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EpisodeCountAggregateInputType | true
    }

  export interface EpisodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Episode'], meta: { name: 'Episode' } }
    /**
     * Find zero or one Episode that matches the filter.
     * @param {EpisodeFindUniqueArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EpisodeFindUniqueArgs>(args: SelectSubset<T, EpisodeFindUniqueArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Episode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EpisodeFindUniqueOrThrowArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EpisodeFindUniqueOrThrowArgs>(args: SelectSubset<T, EpisodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Episode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeFindFirstArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EpisodeFindFirstArgs>(args?: SelectSubset<T, EpisodeFindFirstArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Episode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeFindFirstOrThrowArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EpisodeFindFirstOrThrowArgs>(args?: SelectSubset<T, EpisodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Episodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Episodes
     * const episodes = await prisma.episode.findMany()
     * 
     * // Get first 10 Episodes
     * const episodes = await prisma.episode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const episodeWithIdOnly = await prisma.episode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EpisodeFindManyArgs>(args?: SelectSubset<T, EpisodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Episode.
     * @param {EpisodeCreateArgs} args - Arguments to create a Episode.
     * @example
     * // Create one Episode
     * const Episode = await prisma.episode.create({
     *   data: {
     *     // ... data to create a Episode
     *   }
     * })
     * 
     */
    create<T extends EpisodeCreateArgs>(args: SelectSubset<T, EpisodeCreateArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Episodes.
     * @param {EpisodeCreateManyArgs} args - Arguments to create many Episodes.
     * @example
     * // Create many Episodes
     * const episode = await prisma.episode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EpisodeCreateManyArgs>(args?: SelectSubset<T, EpisodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Episodes and returns the data saved in the database.
     * @param {EpisodeCreateManyAndReturnArgs} args - Arguments to create many Episodes.
     * @example
     * // Create many Episodes
     * const episode = await prisma.episode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Episodes and only return the `id`
     * const episodeWithIdOnly = await prisma.episode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EpisodeCreateManyAndReturnArgs>(args?: SelectSubset<T, EpisodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Episode.
     * @param {EpisodeDeleteArgs} args - Arguments to delete one Episode.
     * @example
     * // Delete one Episode
     * const Episode = await prisma.episode.delete({
     *   where: {
     *     // ... filter to delete one Episode
     *   }
     * })
     * 
     */
    delete<T extends EpisodeDeleteArgs>(args: SelectSubset<T, EpisodeDeleteArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Episode.
     * @param {EpisodeUpdateArgs} args - Arguments to update one Episode.
     * @example
     * // Update one Episode
     * const episode = await prisma.episode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EpisodeUpdateArgs>(args: SelectSubset<T, EpisodeUpdateArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Episodes.
     * @param {EpisodeDeleteManyArgs} args - Arguments to filter Episodes to delete.
     * @example
     * // Delete a few Episodes
     * const { count } = await prisma.episode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EpisodeDeleteManyArgs>(args?: SelectSubset<T, EpisodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Episodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Episodes
     * const episode = await prisma.episode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EpisodeUpdateManyArgs>(args: SelectSubset<T, EpisodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Episodes and returns the data updated in the database.
     * @param {EpisodeUpdateManyAndReturnArgs} args - Arguments to update many Episodes.
     * @example
     * // Update many Episodes
     * const episode = await prisma.episode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Episodes and only return the `id`
     * const episodeWithIdOnly = await prisma.episode.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EpisodeUpdateManyAndReturnArgs>(args: SelectSubset<T, EpisodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Episode.
     * @param {EpisodeUpsertArgs} args - Arguments to update or create a Episode.
     * @example
     * // Update or create a Episode
     * const episode = await prisma.episode.upsert({
     *   create: {
     *     // ... data to create a Episode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Episode we want to update
     *   }
     * })
     */
    upsert<T extends EpisodeUpsertArgs>(args: SelectSubset<T, EpisodeUpsertArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Episodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeCountArgs} args - Arguments to filter Episodes to count.
     * @example
     * // Count the number of Episodes
     * const count = await prisma.episode.count({
     *   where: {
     *     // ... the filter for the Episodes we want to count
     *   }
     * })
    **/
    count<T extends EpisodeCountArgs>(
      args?: Subset<T, EpisodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EpisodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Episode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EpisodeAggregateArgs>(args: Subset<T, EpisodeAggregateArgs>): Prisma.PrismaPromise<GetEpisodeAggregateType<T>>

    /**
     * Group by Episode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EpisodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EpisodeGroupByArgs['orderBy'] }
        : { orderBy?: EpisodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EpisodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEpisodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Episode model
   */
  readonly fields: EpisodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Episode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EpisodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    podcast<T extends PodcastDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PodcastDefaultArgs<ExtArgs>>): Prisma__PodcastClient<$Result.GetResult<Prisma.$PodcastPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Episode model
   */
  interface EpisodeFieldRefs {
    readonly id: FieldRef<"Episode", 'String'>
    readonly createdAt: FieldRef<"Episode", 'DateTime'>
    readonly updatedAt: FieldRef<"Episode", 'DateTime'>
    readonly description: FieldRef<"Episode", 'String'>
    readonly podcastId: FieldRef<"Episode", 'String'>
    readonly title: FieldRef<"Episode", 'String'>
    readonly duration: FieldRef<"Episode", 'Int'>
    readonly pubDate: FieldRef<"Episode", 'DateTime'>
    readonly guid: FieldRef<"Episode", 'String'>
    readonly enclosureUrl: FieldRef<"Episode", 'String'>
    readonly enclosureType: FieldRef<"Episode", 'String'>
    readonly enclosureLength: FieldRef<"Episode", 'Int'>
    readonly itunesDuration: FieldRef<"Episode", 'String'>
    readonly itunesExplicit: FieldRef<"Episode", 'Boolean'>
    readonly itunesImage: FieldRef<"Episode", 'String'>
    readonly itunesOrder: FieldRef<"Episode", 'Int'>
    readonly itunesSubtitle: FieldRef<"Episode", 'String'>
    readonly itunesSummary: FieldRef<"Episode", 'String'>
    readonly itunesKeywords: FieldRef<"Episode", 'String'>
    readonly itunesAuthor: FieldRef<"Episode", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Episode findUnique
   */
  export type EpisodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where: EpisodeWhereUniqueInput
  }

  /**
   * Episode findUniqueOrThrow
   */
  export type EpisodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where: EpisodeWhereUniqueInput
  }

  /**
   * Episode findFirst
   */
  export type EpisodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Episodes.
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Episodes.
     */
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * Episode findFirstOrThrow
   */
  export type EpisodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Episodes.
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Episodes.
     */
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * Episode findMany
   */
  export type EpisodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episodes to fetch.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Episodes.
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * Episode create
   */
  export type EpisodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * The data needed to create a Episode.
     */
    data: XOR<EpisodeCreateInput, EpisodeUncheckedCreateInput>
  }

  /**
   * Episode createMany
   */
  export type EpisodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Episodes.
     */
    data: EpisodeCreateManyInput | EpisodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Episode createManyAndReturn
   */
  export type EpisodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * The data used to create many Episodes.
     */
    data: EpisodeCreateManyInput | EpisodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Episode update
   */
  export type EpisodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * The data needed to update a Episode.
     */
    data: XOR<EpisodeUpdateInput, EpisodeUncheckedUpdateInput>
    /**
     * Choose, which Episode to update.
     */
    where: EpisodeWhereUniqueInput
  }

  /**
   * Episode updateMany
   */
  export type EpisodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Episodes.
     */
    data: XOR<EpisodeUpdateManyMutationInput, EpisodeUncheckedUpdateManyInput>
    /**
     * Filter which Episodes to update
     */
    where?: EpisodeWhereInput
    /**
     * Limit how many Episodes to update.
     */
    limit?: number
  }

  /**
   * Episode updateManyAndReturn
   */
  export type EpisodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * The data used to update Episodes.
     */
    data: XOR<EpisodeUpdateManyMutationInput, EpisodeUncheckedUpdateManyInput>
    /**
     * Filter which Episodes to update
     */
    where?: EpisodeWhereInput
    /**
     * Limit how many Episodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Episode upsert
   */
  export type EpisodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * The filter to search for the Episode to update in case it exists.
     */
    where: EpisodeWhereUniqueInput
    /**
     * In case the Episode found by the `where` argument doesn't exist, create a new Episode with this data.
     */
    create: XOR<EpisodeCreateInput, EpisodeUncheckedCreateInput>
    /**
     * In case the Episode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EpisodeUpdateInput, EpisodeUncheckedUpdateInput>
  }

  /**
   * Episode delete
   */
  export type EpisodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter which Episode to delete.
     */
    where: EpisodeWhereUniqueInput
  }

  /**
   * Episode deleteMany
   */
  export type EpisodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Episodes to delete
     */
    where?: EpisodeWhereInput
    /**
     * Limit how many Episodes to delete.
     */
    limit?: number
  }

  /**
   * Episode without action
   */
  export type EpisodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
  }


  /**
   * Model SearchHistory
   */

  export type AggregateSearchHistory = {
    _count: SearchHistoryCountAggregateOutputType | null
    _avg: SearchHistoryAvgAggregateOutputType | null
    _sum: SearchHistorySumAggregateOutputType | null
    _min: SearchHistoryMinAggregateOutputType | null
    _max: SearchHistoryMaxAggregateOutputType | null
  }

  export type SearchHistoryAvgAggregateOutputType = {
    resultCount: number | null
  }

  export type SearchHistorySumAggregateOutputType = {
    resultCount: number | null
  }

  export type SearchHistoryMinAggregateOutputType = {
    id: string | null
    term: string | null
    resultCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SearchHistoryMaxAggregateOutputType = {
    id: string | null
    term: string | null
    resultCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SearchHistoryCountAggregateOutputType = {
    id: number
    term: number
    resultCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SearchHistoryAvgAggregateInputType = {
    resultCount?: true
  }

  export type SearchHistorySumAggregateInputType = {
    resultCount?: true
  }

  export type SearchHistoryMinAggregateInputType = {
    id?: true
    term?: true
    resultCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SearchHistoryMaxAggregateInputType = {
    id?: true
    term?: true
    resultCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SearchHistoryCountAggregateInputType = {
    id?: true
    term?: true
    resultCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SearchHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SearchHistory to aggregate.
     */
    where?: SearchHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchHistories to fetch.
     */
    orderBy?: SearchHistoryOrderByWithRelationInput | SearchHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SearchHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SearchHistories
    **/
    _count?: true | SearchHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SearchHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SearchHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SearchHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SearchHistoryMaxAggregateInputType
  }

  export type GetSearchHistoryAggregateType<T extends SearchHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateSearchHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSearchHistory[P]>
      : GetScalarType<T[P], AggregateSearchHistory[P]>
  }




  export type SearchHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SearchHistoryWhereInput
    orderBy?: SearchHistoryOrderByWithAggregationInput | SearchHistoryOrderByWithAggregationInput[]
    by: SearchHistoryScalarFieldEnum[] | SearchHistoryScalarFieldEnum
    having?: SearchHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SearchHistoryCountAggregateInputType | true
    _avg?: SearchHistoryAvgAggregateInputType
    _sum?: SearchHistorySumAggregateInputType
    _min?: SearchHistoryMinAggregateInputType
    _max?: SearchHistoryMaxAggregateInputType
  }

  export type SearchHistoryGroupByOutputType = {
    id: string
    term: string
    resultCount: number
    createdAt: Date
    updatedAt: Date
    _count: SearchHistoryCountAggregateOutputType | null
    _avg: SearchHistoryAvgAggregateOutputType | null
    _sum: SearchHistorySumAggregateOutputType | null
    _min: SearchHistoryMinAggregateOutputType | null
    _max: SearchHistoryMaxAggregateOutputType | null
  }

  type GetSearchHistoryGroupByPayload<T extends SearchHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SearchHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SearchHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SearchHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], SearchHistoryGroupByOutputType[P]>
        }
      >
    >


  export type SearchHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    term?: boolean
    resultCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    podcasts?: boolean | SearchHistory$podcastsArgs<ExtArgs>
    _count?: boolean | SearchHistoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["searchHistory"]>

  export type SearchHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    term?: boolean
    resultCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["searchHistory"]>

  export type SearchHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    term?: boolean
    resultCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["searchHistory"]>

  export type SearchHistorySelectScalar = {
    id?: boolean
    term?: boolean
    resultCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SearchHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "term" | "resultCount" | "createdAt" | "updatedAt", ExtArgs["result"]["searchHistory"]>
  export type SearchHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    podcasts?: boolean | SearchHistory$podcastsArgs<ExtArgs>
    _count?: boolean | SearchHistoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SearchHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SearchHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SearchHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SearchHistory"
    objects: {
      podcasts: Prisma.$PodcastPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      term: string
      resultCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["searchHistory"]>
    composites: {}
  }

  type SearchHistoryGetPayload<S extends boolean | null | undefined | SearchHistoryDefaultArgs> = $Result.GetResult<Prisma.$SearchHistoryPayload, S>

  type SearchHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SearchHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SearchHistoryCountAggregateInputType | true
    }

  export interface SearchHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SearchHistory'], meta: { name: 'SearchHistory' } }
    /**
     * Find zero or one SearchHistory that matches the filter.
     * @param {SearchHistoryFindUniqueArgs} args - Arguments to find a SearchHistory
     * @example
     * // Get one SearchHistory
     * const searchHistory = await prisma.searchHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SearchHistoryFindUniqueArgs>(args: SelectSubset<T, SearchHistoryFindUniqueArgs<ExtArgs>>): Prisma__SearchHistoryClient<$Result.GetResult<Prisma.$SearchHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SearchHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SearchHistoryFindUniqueOrThrowArgs} args - Arguments to find a SearchHistory
     * @example
     * // Get one SearchHistory
     * const searchHistory = await prisma.searchHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SearchHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, SearchHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SearchHistoryClient<$Result.GetResult<Prisma.$SearchHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SearchHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchHistoryFindFirstArgs} args - Arguments to find a SearchHistory
     * @example
     * // Get one SearchHistory
     * const searchHistory = await prisma.searchHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SearchHistoryFindFirstArgs>(args?: SelectSubset<T, SearchHistoryFindFirstArgs<ExtArgs>>): Prisma__SearchHistoryClient<$Result.GetResult<Prisma.$SearchHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SearchHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchHistoryFindFirstOrThrowArgs} args - Arguments to find a SearchHistory
     * @example
     * // Get one SearchHistory
     * const searchHistory = await prisma.searchHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SearchHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, SearchHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SearchHistoryClient<$Result.GetResult<Prisma.$SearchHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SearchHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SearchHistories
     * const searchHistories = await prisma.searchHistory.findMany()
     * 
     * // Get first 10 SearchHistories
     * const searchHistories = await prisma.searchHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const searchHistoryWithIdOnly = await prisma.searchHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SearchHistoryFindManyArgs>(args?: SelectSubset<T, SearchHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SearchHistory.
     * @param {SearchHistoryCreateArgs} args - Arguments to create a SearchHistory.
     * @example
     * // Create one SearchHistory
     * const SearchHistory = await prisma.searchHistory.create({
     *   data: {
     *     // ... data to create a SearchHistory
     *   }
     * })
     * 
     */
    create<T extends SearchHistoryCreateArgs>(args: SelectSubset<T, SearchHistoryCreateArgs<ExtArgs>>): Prisma__SearchHistoryClient<$Result.GetResult<Prisma.$SearchHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SearchHistories.
     * @param {SearchHistoryCreateManyArgs} args - Arguments to create many SearchHistories.
     * @example
     * // Create many SearchHistories
     * const searchHistory = await prisma.searchHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SearchHistoryCreateManyArgs>(args?: SelectSubset<T, SearchHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SearchHistories and returns the data saved in the database.
     * @param {SearchHistoryCreateManyAndReturnArgs} args - Arguments to create many SearchHistories.
     * @example
     * // Create many SearchHistories
     * const searchHistory = await prisma.searchHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SearchHistories and only return the `id`
     * const searchHistoryWithIdOnly = await prisma.searchHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SearchHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, SearchHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SearchHistory.
     * @param {SearchHistoryDeleteArgs} args - Arguments to delete one SearchHistory.
     * @example
     * // Delete one SearchHistory
     * const SearchHistory = await prisma.searchHistory.delete({
     *   where: {
     *     // ... filter to delete one SearchHistory
     *   }
     * })
     * 
     */
    delete<T extends SearchHistoryDeleteArgs>(args: SelectSubset<T, SearchHistoryDeleteArgs<ExtArgs>>): Prisma__SearchHistoryClient<$Result.GetResult<Prisma.$SearchHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SearchHistory.
     * @param {SearchHistoryUpdateArgs} args - Arguments to update one SearchHistory.
     * @example
     * // Update one SearchHistory
     * const searchHistory = await prisma.searchHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SearchHistoryUpdateArgs>(args: SelectSubset<T, SearchHistoryUpdateArgs<ExtArgs>>): Prisma__SearchHistoryClient<$Result.GetResult<Prisma.$SearchHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SearchHistories.
     * @param {SearchHistoryDeleteManyArgs} args - Arguments to filter SearchHistories to delete.
     * @example
     * // Delete a few SearchHistories
     * const { count } = await prisma.searchHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SearchHistoryDeleteManyArgs>(args?: SelectSubset<T, SearchHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SearchHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SearchHistories
     * const searchHistory = await prisma.searchHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SearchHistoryUpdateManyArgs>(args: SelectSubset<T, SearchHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SearchHistories and returns the data updated in the database.
     * @param {SearchHistoryUpdateManyAndReturnArgs} args - Arguments to update many SearchHistories.
     * @example
     * // Update many SearchHistories
     * const searchHistory = await prisma.searchHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SearchHistories and only return the `id`
     * const searchHistoryWithIdOnly = await prisma.searchHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SearchHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, SearchHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SearchHistory.
     * @param {SearchHistoryUpsertArgs} args - Arguments to update or create a SearchHistory.
     * @example
     * // Update or create a SearchHistory
     * const searchHistory = await prisma.searchHistory.upsert({
     *   create: {
     *     // ... data to create a SearchHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SearchHistory we want to update
     *   }
     * })
     */
    upsert<T extends SearchHistoryUpsertArgs>(args: SelectSubset<T, SearchHistoryUpsertArgs<ExtArgs>>): Prisma__SearchHistoryClient<$Result.GetResult<Prisma.$SearchHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SearchHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchHistoryCountArgs} args - Arguments to filter SearchHistories to count.
     * @example
     * // Count the number of SearchHistories
     * const count = await prisma.searchHistory.count({
     *   where: {
     *     // ... the filter for the SearchHistories we want to count
     *   }
     * })
    **/
    count<T extends SearchHistoryCountArgs>(
      args?: Subset<T, SearchHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SearchHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SearchHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SearchHistoryAggregateArgs>(args: Subset<T, SearchHistoryAggregateArgs>): Prisma.PrismaPromise<GetSearchHistoryAggregateType<T>>

    /**
     * Group by SearchHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SearchHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SearchHistoryGroupByArgs['orderBy'] }
        : { orderBy?: SearchHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SearchHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSearchHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SearchHistory model
   */
  readonly fields: SearchHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SearchHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SearchHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    podcasts<T extends SearchHistory$podcastsArgs<ExtArgs> = {}>(args?: Subset<T, SearchHistory$podcastsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PodcastPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SearchHistory model
   */
  interface SearchHistoryFieldRefs {
    readonly id: FieldRef<"SearchHistory", 'String'>
    readonly term: FieldRef<"SearchHistory", 'String'>
    readonly resultCount: FieldRef<"SearchHistory", 'Int'>
    readonly createdAt: FieldRef<"SearchHistory", 'DateTime'>
    readonly updatedAt: FieldRef<"SearchHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SearchHistory findUnique
   */
  export type SearchHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchHistory
     */
    omit?: SearchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchHistoryInclude<ExtArgs> | null
    /**
     * Filter, which SearchHistory to fetch.
     */
    where: SearchHistoryWhereUniqueInput
  }

  /**
   * SearchHistory findUniqueOrThrow
   */
  export type SearchHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchHistory
     */
    omit?: SearchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchHistoryInclude<ExtArgs> | null
    /**
     * Filter, which SearchHistory to fetch.
     */
    where: SearchHistoryWhereUniqueInput
  }

  /**
   * SearchHistory findFirst
   */
  export type SearchHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchHistory
     */
    omit?: SearchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchHistoryInclude<ExtArgs> | null
    /**
     * Filter, which SearchHistory to fetch.
     */
    where?: SearchHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchHistories to fetch.
     */
    orderBy?: SearchHistoryOrderByWithRelationInput | SearchHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SearchHistories.
     */
    cursor?: SearchHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchHistories.
     */
    distinct?: SearchHistoryScalarFieldEnum | SearchHistoryScalarFieldEnum[]
  }

  /**
   * SearchHistory findFirstOrThrow
   */
  export type SearchHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchHistory
     */
    omit?: SearchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchHistoryInclude<ExtArgs> | null
    /**
     * Filter, which SearchHistory to fetch.
     */
    where?: SearchHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchHistories to fetch.
     */
    orderBy?: SearchHistoryOrderByWithRelationInput | SearchHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SearchHistories.
     */
    cursor?: SearchHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchHistories.
     */
    distinct?: SearchHistoryScalarFieldEnum | SearchHistoryScalarFieldEnum[]
  }

  /**
   * SearchHistory findMany
   */
  export type SearchHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchHistory
     */
    omit?: SearchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchHistoryInclude<ExtArgs> | null
    /**
     * Filter, which SearchHistories to fetch.
     */
    where?: SearchHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchHistories to fetch.
     */
    orderBy?: SearchHistoryOrderByWithRelationInput | SearchHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SearchHistories.
     */
    cursor?: SearchHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchHistories.
     */
    skip?: number
    distinct?: SearchHistoryScalarFieldEnum | SearchHistoryScalarFieldEnum[]
  }

  /**
   * SearchHistory create
   */
  export type SearchHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchHistory
     */
    omit?: SearchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a SearchHistory.
     */
    data: XOR<SearchHistoryCreateInput, SearchHistoryUncheckedCreateInput>
  }

  /**
   * SearchHistory createMany
   */
  export type SearchHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SearchHistories.
     */
    data: SearchHistoryCreateManyInput | SearchHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SearchHistory createManyAndReturn
   */
  export type SearchHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SearchHistory
     */
    omit?: SearchHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many SearchHistories.
     */
    data: SearchHistoryCreateManyInput | SearchHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SearchHistory update
   */
  export type SearchHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchHistory
     */
    omit?: SearchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a SearchHistory.
     */
    data: XOR<SearchHistoryUpdateInput, SearchHistoryUncheckedUpdateInput>
    /**
     * Choose, which SearchHistory to update.
     */
    where: SearchHistoryWhereUniqueInput
  }

  /**
   * SearchHistory updateMany
   */
  export type SearchHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SearchHistories.
     */
    data: XOR<SearchHistoryUpdateManyMutationInput, SearchHistoryUncheckedUpdateManyInput>
    /**
     * Filter which SearchHistories to update
     */
    where?: SearchHistoryWhereInput
    /**
     * Limit how many SearchHistories to update.
     */
    limit?: number
  }

  /**
   * SearchHistory updateManyAndReturn
   */
  export type SearchHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SearchHistory
     */
    omit?: SearchHistoryOmit<ExtArgs> | null
    /**
     * The data used to update SearchHistories.
     */
    data: XOR<SearchHistoryUpdateManyMutationInput, SearchHistoryUncheckedUpdateManyInput>
    /**
     * Filter which SearchHistories to update
     */
    where?: SearchHistoryWhereInput
    /**
     * Limit how many SearchHistories to update.
     */
    limit?: number
  }

  /**
   * SearchHistory upsert
   */
  export type SearchHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchHistory
     */
    omit?: SearchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the SearchHistory to update in case it exists.
     */
    where: SearchHistoryWhereUniqueInput
    /**
     * In case the SearchHistory found by the `where` argument doesn't exist, create a new SearchHistory with this data.
     */
    create: XOR<SearchHistoryCreateInput, SearchHistoryUncheckedCreateInput>
    /**
     * In case the SearchHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SearchHistoryUpdateInput, SearchHistoryUncheckedUpdateInput>
  }

  /**
   * SearchHistory delete
   */
  export type SearchHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchHistory
     */
    omit?: SearchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchHistoryInclude<ExtArgs> | null
    /**
     * Filter which SearchHistory to delete.
     */
    where: SearchHistoryWhereUniqueInput
  }

  /**
   * SearchHistory deleteMany
   */
  export type SearchHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SearchHistories to delete
     */
    where?: SearchHistoryWhereInput
    /**
     * Limit how many SearchHistories to delete.
     */
    limit?: number
  }

  /**
   * SearchHistory.podcasts
   */
  export type SearchHistory$podcastsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Podcast
     */
    select?: PodcastSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Podcast
     */
    omit?: PodcastOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PodcastInclude<ExtArgs> | null
    where?: PodcastWhereInput
    orderBy?: PodcastOrderByWithRelationInput | PodcastOrderByWithRelationInput[]
    cursor?: PodcastWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PodcastScalarFieldEnum | PodcastScalarFieldEnum[]
  }

  /**
   * SearchHistory without action
   */
  export type SearchHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: SearchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchHistory
     */
    omit?: SearchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchHistoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PodcastScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    collectionId: 'collectionId',
    trackId: 'trackId',
    artistName: 'artistName',
    collectionName: 'collectionName',
    trackName: 'trackName',
    collectionViewUrl: 'collectionViewUrl',
    feedUrl: 'feedUrl',
    artworkUrl30: 'artworkUrl30',
    artworkUrl60: 'artworkUrl60',
    artworkUrl100: 'artworkUrl100',
    artworkUrl600: 'artworkUrl600',
    releaseDate: 'releaseDate',
    trackTimeMillis: 'trackTimeMillis',
    country: 'country',
    currency: 'currency',
    primaryGenreName: 'primaryGenreName',
    contentAdvisoryRating: 'contentAdvisoryRating',
    artworkUrl30_2x: 'artworkUrl30_2x',
    artworkUrl60_2x: 'artworkUrl60_2x',
    artworkUrl100_2x: 'artworkUrl100_2x',
    artworkUrl600_2x: 'artworkUrl600_2x',
    artistViewUrl: 'artistViewUrl',
    trackCensoredName: 'trackCensoredName',
    collectionCensoredName: 'collectionCensoredName',
    artistId: 'artistId',
    collectionPrice: 'collectionPrice',
    trackPrice: 'trackPrice',
    collectionHdPrice: 'collectionHdPrice',
    trackHdPrice: 'trackHdPrice',
    trackHdRentalPrice: 'trackHdRentalPrice',
    collectionExplicitness: 'collectionExplicitness',
    trackExplicitness: 'trackExplicitness',
    trackCount: 'trackCount',
    copyright: 'copyright',
    description: 'description',
    shortDescription: 'shortDescription',
    longDescription: 'longDescription',
    searchHistoryId: 'searchHistoryId'
  };

  export type PodcastScalarFieldEnum = (typeof PodcastScalarFieldEnum)[keyof typeof PodcastScalarFieldEnum]


  export const GenreScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GenreScalarFieldEnum = (typeof GenreScalarFieldEnum)[keyof typeof GenreScalarFieldEnum]


  export const EpisodeScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    description: 'description',
    podcastId: 'podcastId',
    title: 'title',
    duration: 'duration',
    pubDate: 'pubDate',
    guid: 'guid',
    enclosureUrl: 'enclosureUrl',
    enclosureType: 'enclosureType',
    enclosureLength: 'enclosureLength',
    itunesDuration: 'itunesDuration',
    itunesExplicit: 'itunesExplicit',
    itunesImage: 'itunesImage',
    itunesOrder: 'itunesOrder',
    itunesSubtitle: 'itunesSubtitle',
    itunesSummary: 'itunesSummary',
    itunesKeywords: 'itunesKeywords',
    itunesAuthor: 'itunesAuthor'
  };

  export type EpisodeScalarFieldEnum = (typeof EpisodeScalarFieldEnum)[keyof typeof EpisodeScalarFieldEnum]


  export const SearchHistoryScalarFieldEnum: {
    id: 'id',
    term: 'term',
    resultCount: 'resultCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SearchHistoryScalarFieldEnum = (typeof SearchHistoryScalarFieldEnum)[keyof typeof SearchHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type PodcastWhereInput = {
    AND?: PodcastWhereInput | PodcastWhereInput[]
    OR?: PodcastWhereInput[]
    NOT?: PodcastWhereInput | PodcastWhereInput[]
    id?: StringFilter<"Podcast"> | string
    createdAt?: DateTimeFilter<"Podcast"> | Date | string
    updatedAt?: DateTimeFilter<"Podcast"> | Date | string
    collectionId?: IntFilter<"Podcast"> | number
    trackId?: IntFilter<"Podcast"> | number
    artistName?: StringNullableFilter<"Podcast"> | string | null
    collectionName?: StringFilter<"Podcast"> | string
    trackName?: StringFilter<"Podcast"> | string
    collectionViewUrl?: StringNullableFilter<"Podcast"> | string | null
    feedUrl?: StringNullableFilter<"Podcast"> | string | null
    artworkUrl30?: StringNullableFilter<"Podcast"> | string | null
    artworkUrl60?: StringNullableFilter<"Podcast"> | string | null
    artworkUrl100?: StringNullableFilter<"Podcast"> | string | null
    artworkUrl600?: StringNullableFilter<"Podcast"> | string | null
    releaseDate?: DateTimeNullableFilter<"Podcast"> | Date | string | null
    trackTimeMillis?: IntNullableFilter<"Podcast"> | number | null
    country?: StringNullableFilter<"Podcast"> | string | null
    currency?: StringNullableFilter<"Podcast"> | string | null
    primaryGenreName?: StringNullableFilter<"Podcast"> | string | null
    contentAdvisoryRating?: StringNullableFilter<"Podcast"> | string | null
    artworkUrl30_2x?: StringNullableFilter<"Podcast"> | string | null
    artworkUrl60_2x?: StringNullableFilter<"Podcast"> | string | null
    artworkUrl100_2x?: StringNullableFilter<"Podcast"> | string | null
    artworkUrl600_2x?: StringNullableFilter<"Podcast"> | string | null
    artistViewUrl?: StringNullableFilter<"Podcast"> | string | null
    trackCensoredName?: StringNullableFilter<"Podcast"> | string | null
    collectionCensoredName?: StringNullableFilter<"Podcast"> | string | null
    artistId?: IntNullableFilter<"Podcast"> | number | null
    collectionPrice?: FloatNullableFilter<"Podcast"> | number | null
    trackPrice?: FloatNullableFilter<"Podcast"> | number | null
    collectionHdPrice?: FloatNullableFilter<"Podcast"> | number | null
    trackHdPrice?: FloatNullableFilter<"Podcast"> | number | null
    trackHdRentalPrice?: FloatNullableFilter<"Podcast"> | number | null
    collectionExplicitness?: StringNullableFilter<"Podcast"> | string | null
    trackExplicitness?: StringNullableFilter<"Podcast"> | string | null
    trackCount?: IntNullableFilter<"Podcast"> | number | null
    copyright?: StringNullableFilter<"Podcast"> | string | null
    description?: StringNullableFilter<"Podcast"> | string | null
    shortDescription?: StringNullableFilter<"Podcast"> | string | null
    longDescription?: StringNullableFilter<"Podcast"> | string | null
    searchHistoryId?: StringNullableFilter<"Podcast"> | string | null
    searchHistory?: XOR<SearchHistoryNullableScalarRelationFilter, SearchHistoryWhereInput> | null
    genres?: GenreListRelationFilter
    episodes?: EpisodeListRelationFilter
  }

  export type PodcastOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    collectionId?: SortOrder
    trackId?: SortOrder
    artistName?: SortOrderInput | SortOrder
    collectionName?: SortOrder
    trackName?: SortOrder
    collectionViewUrl?: SortOrderInput | SortOrder
    feedUrl?: SortOrderInput | SortOrder
    artworkUrl30?: SortOrderInput | SortOrder
    artworkUrl60?: SortOrderInput | SortOrder
    artworkUrl100?: SortOrderInput | SortOrder
    artworkUrl600?: SortOrderInput | SortOrder
    releaseDate?: SortOrderInput | SortOrder
    trackTimeMillis?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    primaryGenreName?: SortOrderInput | SortOrder
    contentAdvisoryRating?: SortOrderInput | SortOrder
    artworkUrl30_2x?: SortOrderInput | SortOrder
    artworkUrl60_2x?: SortOrderInput | SortOrder
    artworkUrl100_2x?: SortOrderInput | SortOrder
    artworkUrl600_2x?: SortOrderInput | SortOrder
    artistViewUrl?: SortOrderInput | SortOrder
    trackCensoredName?: SortOrderInput | SortOrder
    collectionCensoredName?: SortOrderInput | SortOrder
    artistId?: SortOrderInput | SortOrder
    collectionPrice?: SortOrderInput | SortOrder
    trackPrice?: SortOrderInput | SortOrder
    collectionHdPrice?: SortOrderInput | SortOrder
    trackHdPrice?: SortOrderInput | SortOrder
    trackHdRentalPrice?: SortOrderInput | SortOrder
    collectionExplicitness?: SortOrderInput | SortOrder
    trackExplicitness?: SortOrderInput | SortOrder
    trackCount?: SortOrderInput | SortOrder
    copyright?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    shortDescription?: SortOrderInput | SortOrder
    longDescription?: SortOrderInput | SortOrder
    searchHistoryId?: SortOrderInput | SortOrder
    searchHistory?: SearchHistoryOrderByWithRelationInput
    genres?: GenreOrderByRelationAggregateInput
    episodes?: EpisodeOrderByRelationAggregateInput
  }

  export type PodcastWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    collectionId?: number
    AND?: PodcastWhereInput | PodcastWhereInput[]
    OR?: PodcastWhereInput[]
    NOT?: PodcastWhereInput | PodcastWhereInput[]
    createdAt?: DateTimeFilter<"Podcast"> | Date | string
    updatedAt?: DateTimeFilter<"Podcast"> | Date | string
    trackId?: IntFilter<"Podcast"> | number
    artistName?: StringNullableFilter<"Podcast"> | string | null
    collectionName?: StringFilter<"Podcast"> | string
    trackName?: StringFilter<"Podcast"> | string
    collectionViewUrl?: StringNullableFilter<"Podcast"> | string | null
    feedUrl?: StringNullableFilter<"Podcast"> | string | null
    artworkUrl30?: StringNullableFilter<"Podcast"> | string | null
    artworkUrl60?: StringNullableFilter<"Podcast"> | string | null
    artworkUrl100?: StringNullableFilter<"Podcast"> | string | null
    artworkUrl600?: StringNullableFilter<"Podcast"> | string | null
    releaseDate?: DateTimeNullableFilter<"Podcast"> | Date | string | null
    trackTimeMillis?: IntNullableFilter<"Podcast"> | number | null
    country?: StringNullableFilter<"Podcast"> | string | null
    currency?: StringNullableFilter<"Podcast"> | string | null
    primaryGenreName?: StringNullableFilter<"Podcast"> | string | null
    contentAdvisoryRating?: StringNullableFilter<"Podcast"> | string | null
    artworkUrl30_2x?: StringNullableFilter<"Podcast"> | string | null
    artworkUrl60_2x?: StringNullableFilter<"Podcast"> | string | null
    artworkUrl100_2x?: StringNullableFilter<"Podcast"> | string | null
    artworkUrl600_2x?: StringNullableFilter<"Podcast"> | string | null
    artistViewUrl?: StringNullableFilter<"Podcast"> | string | null
    trackCensoredName?: StringNullableFilter<"Podcast"> | string | null
    collectionCensoredName?: StringNullableFilter<"Podcast"> | string | null
    artistId?: IntNullableFilter<"Podcast"> | number | null
    collectionPrice?: FloatNullableFilter<"Podcast"> | number | null
    trackPrice?: FloatNullableFilter<"Podcast"> | number | null
    collectionHdPrice?: FloatNullableFilter<"Podcast"> | number | null
    trackHdPrice?: FloatNullableFilter<"Podcast"> | number | null
    trackHdRentalPrice?: FloatNullableFilter<"Podcast"> | number | null
    collectionExplicitness?: StringNullableFilter<"Podcast"> | string | null
    trackExplicitness?: StringNullableFilter<"Podcast"> | string | null
    trackCount?: IntNullableFilter<"Podcast"> | number | null
    copyright?: StringNullableFilter<"Podcast"> | string | null
    description?: StringNullableFilter<"Podcast"> | string | null
    shortDescription?: StringNullableFilter<"Podcast"> | string | null
    longDescription?: StringNullableFilter<"Podcast"> | string | null
    searchHistoryId?: StringNullableFilter<"Podcast"> | string | null
    searchHistory?: XOR<SearchHistoryNullableScalarRelationFilter, SearchHistoryWhereInput> | null
    genres?: GenreListRelationFilter
    episodes?: EpisodeListRelationFilter
  }, "id" | "collectionId">

  export type PodcastOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    collectionId?: SortOrder
    trackId?: SortOrder
    artistName?: SortOrderInput | SortOrder
    collectionName?: SortOrder
    trackName?: SortOrder
    collectionViewUrl?: SortOrderInput | SortOrder
    feedUrl?: SortOrderInput | SortOrder
    artworkUrl30?: SortOrderInput | SortOrder
    artworkUrl60?: SortOrderInput | SortOrder
    artworkUrl100?: SortOrderInput | SortOrder
    artworkUrl600?: SortOrderInput | SortOrder
    releaseDate?: SortOrderInput | SortOrder
    trackTimeMillis?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    primaryGenreName?: SortOrderInput | SortOrder
    contentAdvisoryRating?: SortOrderInput | SortOrder
    artworkUrl30_2x?: SortOrderInput | SortOrder
    artworkUrl60_2x?: SortOrderInput | SortOrder
    artworkUrl100_2x?: SortOrderInput | SortOrder
    artworkUrl600_2x?: SortOrderInput | SortOrder
    artistViewUrl?: SortOrderInput | SortOrder
    trackCensoredName?: SortOrderInput | SortOrder
    collectionCensoredName?: SortOrderInput | SortOrder
    artistId?: SortOrderInput | SortOrder
    collectionPrice?: SortOrderInput | SortOrder
    trackPrice?: SortOrderInput | SortOrder
    collectionHdPrice?: SortOrderInput | SortOrder
    trackHdPrice?: SortOrderInput | SortOrder
    trackHdRentalPrice?: SortOrderInput | SortOrder
    collectionExplicitness?: SortOrderInput | SortOrder
    trackExplicitness?: SortOrderInput | SortOrder
    trackCount?: SortOrderInput | SortOrder
    copyright?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    shortDescription?: SortOrderInput | SortOrder
    longDescription?: SortOrderInput | SortOrder
    searchHistoryId?: SortOrderInput | SortOrder
    _count?: PodcastCountOrderByAggregateInput
    _avg?: PodcastAvgOrderByAggregateInput
    _max?: PodcastMaxOrderByAggregateInput
    _min?: PodcastMinOrderByAggregateInput
    _sum?: PodcastSumOrderByAggregateInput
  }

  export type PodcastScalarWhereWithAggregatesInput = {
    AND?: PodcastScalarWhereWithAggregatesInput | PodcastScalarWhereWithAggregatesInput[]
    OR?: PodcastScalarWhereWithAggregatesInput[]
    NOT?: PodcastScalarWhereWithAggregatesInput | PodcastScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Podcast"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Podcast"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Podcast"> | Date | string
    collectionId?: IntWithAggregatesFilter<"Podcast"> | number
    trackId?: IntWithAggregatesFilter<"Podcast"> | number
    artistName?: StringNullableWithAggregatesFilter<"Podcast"> | string | null
    collectionName?: StringWithAggregatesFilter<"Podcast"> | string
    trackName?: StringWithAggregatesFilter<"Podcast"> | string
    collectionViewUrl?: StringNullableWithAggregatesFilter<"Podcast"> | string | null
    feedUrl?: StringNullableWithAggregatesFilter<"Podcast"> | string | null
    artworkUrl30?: StringNullableWithAggregatesFilter<"Podcast"> | string | null
    artworkUrl60?: StringNullableWithAggregatesFilter<"Podcast"> | string | null
    artworkUrl100?: StringNullableWithAggregatesFilter<"Podcast"> | string | null
    artworkUrl600?: StringNullableWithAggregatesFilter<"Podcast"> | string | null
    releaseDate?: DateTimeNullableWithAggregatesFilter<"Podcast"> | Date | string | null
    trackTimeMillis?: IntNullableWithAggregatesFilter<"Podcast"> | number | null
    country?: StringNullableWithAggregatesFilter<"Podcast"> | string | null
    currency?: StringNullableWithAggregatesFilter<"Podcast"> | string | null
    primaryGenreName?: StringNullableWithAggregatesFilter<"Podcast"> | string | null
    contentAdvisoryRating?: StringNullableWithAggregatesFilter<"Podcast"> | string | null
    artworkUrl30_2x?: StringNullableWithAggregatesFilter<"Podcast"> | string | null
    artworkUrl60_2x?: StringNullableWithAggregatesFilter<"Podcast"> | string | null
    artworkUrl100_2x?: StringNullableWithAggregatesFilter<"Podcast"> | string | null
    artworkUrl600_2x?: StringNullableWithAggregatesFilter<"Podcast"> | string | null
    artistViewUrl?: StringNullableWithAggregatesFilter<"Podcast"> | string | null
    trackCensoredName?: StringNullableWithAggregatesFilter<"Podcast"> | string | null
    collectionCensoredName?: StringNullableWithAggregatesFilter<"Podcast"> | string | null
    artistId?: IntNullableWithAggregatesFilter<"Podcast"> | number | null
    collectionPrice?: FloatNullableWithAggregatesFilter<"Podcast"> | number | null
    trackPrice?: FloatNullableWithAggregatesFilter<"Podcast"> | number | null
    collectionHdPrice?: FloatNullableWithAggregatesFilter<"Podcast"> | number | null
    trackHdPrice?: FloatNullableWithAggregatesFilter<"Podcast"> | number | null
    trackHdRentalPrice?: FloatNullableWithAggregatesFilter<"Podcast"> | number | null
    collectionExplicitness?: StringNullableWithAggregatesFilter<"Podcast"> | string | null
    trackExplicitness?: StringNullableWithAggregatesFilter<"Podcast"> | string | null
    trackCount?: IntNullableWithAggregatesFilter<"Podcast"> | number | null
    copyright?: StringNullableWithAggregatesFilter<"Podcast"> | string | null
    description?: StringNullableWithAggregatesFilter<"Podcast"> | string | null
    shortDescription?: StringNullableWithAggregatesFilter<"Podcast"> | string | null
    longDescription?: StringNullableWithAggregatesFilter<"Podcast"> | string | null
    searchHistoryId?: StringNullableWithAggregatesFilter<"Podcast"> | string | null
  }

  export type GenreWhereInput = {
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    id?: StringFilter<"Genre"> | string
    name?: StringFilter<"Genre"> | string
    createdAt?: DateTimeFilter<"Genre"> | Date | string
    updatedAt?: DateTimeFilter<"Genre"> | Date | string
    podcasts?: PodcastListRelationFilter
  }

  export type GenreOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    podcasts?: PodcastOrderByRelationAggregateInput
  }

  export type GenreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    createdAt?: DateTimeFilter<"Genre"> | Date | string
    updatedAt?: DateTimeFilter<"Genre"> | Date | string
    podcasts?: PodcastListRelationFilter
  }, "id" | "name">

  export type GenreOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GenreCountOrderByAggregateInput
    _max?: GenreMaxOrderByAggregateInput
    _min?: GenreMinOrderByAggregateInput
  }

  export type GenreScalarWhereWithAggregatesInput = {
    AND?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    OR?: GenreScalarWhereWithAggregatesInput[]
    NOT?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Genre"> | string
    name?: StringWithAggregatesFilter<"Genre"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Genre"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Genre"> | Date | string
  }

  export type EpisodeWhereInput = {
    AND?: EpisodeWhereInput | EpisodeWhereInput[]
    OR?: EpisodeWhereInput[]
    NOT?: EpisodeWhereInput | EpisodeWhereInput[]
    id?: StringFilter<"Episode"> | string
    createdAt?: DateTimeFilter<"Episode"> | Date | string
    updatedAt?: DateTimeFilter<"Episode"> | Date | string
    description?: StringNullableFilter<"Episode"> | string | null
    podcastId?: StringFilter<"Episode"> | string
    title?: StringFilter<"Episode"> | string
    duration?: IntNullableFilter<"Episode"> | number | null
    pubDate?: DateTimeNullableFilter<"Episode"> | Date | string | null
    guid?: StringNullableFilter<"Episode"> | string | null
    enclosureUrl?: StringNullableFilter<"Episode"> | string | null
    enclosureType?: StringNullableFilter<"Episode"> | string | null
    enclosureLength?: IntNullableFilter<"Episode"> | number | null
    itunesDuration?: StringNullableFilter<"Episode"> | string | null
    itunesExplicit?: BoolNullableFilter<"Episode"> | boolean | null
    itunesImage?: StringNullableFilter<"Episode"> | string | null
    itunesOrder?: IntNullableFilter<"Episode"> | number | null
    itunesSubtitle?: StringNullableFilter<"Episode"> | string | null
    itunesSummary?: StringNullableFilter<"Episode"> | string | null
    itunesKeywords?: StringNullableFilter<"Episode"> | string | null
    itunesAuthor?: StringNullableFilter<"Episode"> | string | null
    podcast?: XOR<PodcastScalarRelationFilter, PodcastWhereInput>
  }

  export type EpisodeOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrderInput | SortOrder
    podcastId?: SortOrder
    title?: SortOrder
    duration?: SortOrderInput | SortOrder
    pubDate?: SortOrderInput | SortOrder
    guid?: SortOrderInput | SortOrder
    enclosureUrl?: SortOrderInput | SortOrder
    enclosureType?: SortOrderInput | SortOrder
    enclosureLength?: SortOrderInput | SortOrder
    itunesDuration?: SortOrderInput | SortOrder
    itunesExplicit?: SortOrderInput | SortOrder
    itunesImage?: SortOrderInput | SortOrder
    itunesOrder?: SortOrderInput | SortOrder
    itunesSubtitle?: SortOrderInput | SortOrder
    itunesSummary?: SortOrderInput | SortOrder
    itunesKeywords?: SortOrderInput | SortOrder
    itunesAuthor?: SortOrderInput | SortOrder
    podcast?: PodcastOrderByWithRelationInput
  }

  export type EpisodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EpisodeWhereInput | EpisodeWhereInput[]
    OR?: EpisodeWhereInput[]
    NOT?: EpisodeWhereInput | EpisodeWhereInput[]
    createdAt?: DateTimeFilter<"Episode"> | Date | string
    updatedAt?: DateTimeFilter<"Episode"> | Date | string
    description?: StringNullableFilter<"Episode"> | string | null
    podcastId?: StringFilter<"Episode"> | string
    title?: StringFilter<"Episode"> | string
    duration?: IntNullableFilter<"Episode"> | number | null
    pubDate?: DateTimeNullableFilter<"Episode"> | Date | string | null
    guid?: StringNullableFilter<"Episode"> | string | null
    enclosureUrl?: StringNullableFilter<"Episode"> | string | null
    enclosureType?: StringNullableFilter<"Episode"> | string | null
    enclosureLength?: IntNullableFilter<"Episode"> | number | null
    itunesDuration?: StringNullableFilter<"Episode"> | string | null
    itunesExplicit?: BoolNullableFilter<"Episode"> | boolean | null
    itunesImage?: StringNullableFilter<"Episode"> | string | null
    itunesOrder?: IntNullableFilter<"Episode"> | number | null
    itunesSubtitle?: StringNullableFilter<"Episode"> | string | null
    itunesSummary?: StringNullableFilter<"Episode"> | string | null
    itunesKeywords?: StringNullableFilter<"Episode"> | string | null
    itunesAuthor?: StringNullableFilter<"Episode"> | string | null
    podcast?: XOR<PodcastScalarRelationFilter, PodcastWhereInput>
  }, "id">

  export type EpisodeOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrderInput | SortOrder
    podcastId?: SortOrder
    title?: SortOrder
    duration?: SortOrderInput | SortOrder
    pubDate?: SortOrderInput | SortOrder
    guid?: SortOrderInput | SortOrder
    enclosureUrl?: SortOrderInput | SortOrder
    enclosureType?: SortOrderInput | SortOrder
    enclosureLength?: SortOrderInput | SortOrder
    itunesDuration?: SortOrderInput | SortOrder
    itunesExplicit?: SortOrderInput | SortOrder
    itunesImage?: SortOrderInput | SortOrder
    itunesOrder?: SortOrderInput | SortOrder
    itunesSubtitle?: SortOrderInput | SortOrder
    itunesSummary?: SortOrderInput | SortOrder
    itunesKeywords?: SortOrderInput | SortOrder
    itunesAuthor?: SortOrderInput | SortOrder
    _count?: EpisodeCountOrderByAggregateInput
    _avg?: EpisodeAvgOrderByAggregateInput
    _max?: EpisodeMaxOrderByAggregateInput
    _min?: EpisodeMinOrderByAggregateInput
    _sum?: EpisodeSumOrderByAggregateInput
  }

  export type EpisodeScalarWhereWithAggregatesInput = {
    AND?: EpisodeScalarWhereWithAggregatesInput | EpisodeScalarWhereWithAggregatesInput[]
    OR?: EpisodeScalarWhereWithAggregatesInput[]
    NOT?: EpisodeScalarWhereWithAggregatesInput | EpisodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Episode"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Episode"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Episode"> | Date | string
    description?: StringNullableWithAggregatesFilter<"Episode"> | string | null
    podcastId?: StringWithAggregatesFilter<"Episode"> | string
    title?: StringWithAggregatesFilter<"Episode"> | string
    duration?: IntNullableWithAggregatesFilter<"Episode"> | number | null
    pubDate?: DateTimeNullableWithAggregatesFilter<"Episode"> | Date | string | null
    guid?: StringNullableWithAggregatesFilter<"Episode"> | string | null
    enclosureUrl?: StringNullableWithAggregatesFilter<"Episode"> | string | null
    enclosureType?: StringNullableWithAggregatesFilter<"Episode"> | string | null
    enclosureLength?: IntNullableWithAggregatesFilter<"Episode"> | number | null
    itunesDuration?: StringNullableWithAggregatesFilter<"Episode"> | string | null
    itunesExplicit?: BoolNullableWithAggregatesFilter<"Episode"> | boolean | null
    itunesImage?: StringNullableWithAggregatesFilter<"Episode"> | string | null
    itunesOrder?: IntNullableWithAggregatesFilter<"Episode"> | number | null
    itunesSubtitle?: StringNullableWithAggregatesFilter<"Episode"> | string | null
    itunesSummary?: StringNullableWithAggregatesFilter<"Episode"> | string | null
    itunesKeywords?: StringNullableWithAggregatesFilter<"Episode"> | string | null
    itunesAuthor?: StringNullableWithAggregatesFilter<"Episode"> | string | null
  }

  export type SearchHistoryWhereInput = {
    AND?: SearchHistoryWhereInput | SearchHistoryWhereInput[]
    OR?: SearchHistoryWhereInput[]
    NOT?: SearchHistoryWhereInput | SearchHistoryWhereInput[]
    id?: StringFilter<"SearchHistory"> | string
    term?: StringFilter<"SearchHistory"> | string
    resultCount?: IntFilter<"SearchHistory"> | number
    createdAt?: DateTimeFilter<"SearchHistory"> | Date | string
    updatedAt?: DateTimeFilter<"SearchHistory"> | Date | string
    podcasts?: PodcastListRelationFilter
  }

  export type SearchHistoryOrderByWithRelationInput = {
    id?: SortOrder
    term?: SortOrder
    resultCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    podcasts?: PodcastOrderByRelationAggregateInput
  }

  export type SearchHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    term?: string
    AND?: SearchHistoryWhereInput | SearchHistoryWhereInput[]
    OR?: SearchHistoryWhereInput[]
    NOT?: SearchHistoryWhereInput | SearchHistoryWhereInput[]
    resultCount?: IntFilter<"SearchHistory"> | number
    createdAt?: DateTimeFilter<"SearchHistory"> | Date | string
    updatedAt?: DateTimeFilter<"SearchHistory"> | Date | string
    podcasts?: PodcastListRelationFilter
  }, "id" | "term">

  export type SearchHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    term?: SortOrder
    resultCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SearchHistoryCountOrderByAggregateInput
    _avg?: SearchHistoryAvgOrderByAggregateInput
    _max?: SearchHistoryMaxOrderByAggregateInput
    _min?: SearchHistoryMinOrderByAggregateInput
    _sum?: SearchHistorySumOrderByAggregateInput
  }

  export type SearchHistoryScalarWhereWithAggregatesInput = {
    AND?: SearchHistoryScalarWhereWithAggregatesInput | SearchHistoryScalarWhereWithAggregatesInput[]
    OR?: SearchHistoryScalarWhereWithAggregatesInput[]
    NOT?: SearchHistoryScalarWhereWithAggregatesInput | SearchHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SearchHistory"> | string
    term?: StringWithAggregatesFilter<"SearchHistory"> | string
    resultCount?: IntWithAggregatesFilter<"SearchHistory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SearchHistory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SearchHistory"> | Date | string
  }

  export type PodcastCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    collectionId: number
    trackId: number
    artistName?: string | null
    collectionName: string
    trackName: string
    collectionViewUrl?: string | null
    feedUrl?: string | null
    artworkUrl30?: string | null
    artworkUrl60?: string | null
    artworkUrl100?: string | null
    artworkUrl600?: string | null
    releaseDate?: Date | string | null
    trackTimeMillis?: number | null
    country?: string | null
    currency?: string | null
    primaryGenreName?: string | null
    contentAdvisoryRating?: string | null
    artworkUrl30_2x?: string | null
    artworkUrl60_2x?: string | null
    artworkUrl100_2x?: string | null
    artworkUrl600_2x?: string | null
    artistViewUrl?: string | null
    trackCensoredName?: string | null
    collectionCensoredName?: string | null
    artistId?: number | null
    collectionPrice?: number | null
    trackPrice?: number | null
    collectionHdPrice?: number | null
    trackHdPrice?: number | null
    trackHdRentalPrice?: number | null
    collectionExplicitness?: string | null
    trackExplicitness?: string | null
    trackCount?: number | null
    copyright?: string | null
    description?: string | null
    shortDescription?: string | null
    longDescription?: string | null
    searchHistory?: SearchHistoryCreateNestedOneWithoutPodcastsInput
    genres?: GenreCreateNestedManyWithoutPodcastsInput
    episodes?: EpisodeCreateNestedManyWithoutPodcastInput
  }

  export type PodcastUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    collectionId: number
    trackId: number
    artistName?: string | null
    collectionName: string
    trackName: string
    collectionViewUrl?: string | null
    feedUrl?: string | null
    artworkUrl30?: string | null
    artworkUrl60?: string | null
    artworkUrl100?: string | null
    artworkUrl600?: string | null
    releaseDate?: Date | string | null
    trackTimeMillis?: number | null
    country?: string | null
    currency?: string | null
    primaryGenreName?: string | null
    contentAdvisoryRating?: string | null
    artworkUrl30_2x?: string | null
    artworkUrl60_2x?: string | null
    artworkUrl100_2x?: string | null
    artworkUrl600_2x?: string | null
    artistViewUrl?: string | null
    trackCensoredName?: string | null
    collectionCensoredName?: string | null
    artistId?: number | null
    collectionPrice?: number | null
    trackPrice?: number | null
    collectionHdPrice?: number | null
    trackHdPrice?: number | null
    trackHdRentalPrice?: number | null
    collectionExplicitness?: string | null
    trackExplicitness?: string | null
    trackCount?: number | null
    copyright?: string | null
    description?: string | null
    shortDescription?: string | null
    longDescription?: string | null
    searchHistoryId?: string | null
    genres?: GenreUncheckedCreateNestedManyWithoutPodcastsInput
    episodes?: EpisodeUncheckedCreateNestedManyWithoutPodcastInput
  }

  export type PodcastUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionId?: IntFieldUpdateOperationsInput | number
    trackId?: IntFieldUpdateOperationsInput | number
    artistName?: NullableStringFieldUpdateOperationsInput | string | null
    collectionName?: StringFieldUpdateOperationsInput | string
    trackName?: StringFieldUpdateOperationsInput | string
    collectionViewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    feedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl30?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl60?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl100?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl600?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trackTimeMillis?: NullableIntFieldUpdateOperationsInput | number | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    primaryGenreName?: NullableStringFieldUpdateOperationsInput | string | null
    contentAdvisoryRating?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl30_2x?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl60_2x?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl100_2x?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl600_2x?: NullableStringFieldUpdateOperationsInput | string | null
    artistViewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trackCensoredName?: NullableStringFieldUpdateOperationsInput | string | null
    collectionCensoredName?: NullableStringFieldUpdateOperationsInput | string | null
    artistId?: NullableIntFieldUpdateOperationsInput | number | null
    collectionPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    trackPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    collectionHdPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    trackHdPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    trackHdRentalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    collectionExplicitness?: NullableStringFieldUpdateOperationsInput | string | null
    trackExplicitness?: NullableStringFieldUpdateOperationsInput | string | null
    trackCount?: NullableIntFieldUpdateOperationsInput | number | null
    copyright?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    longDescription?: NullableStringFieldUpdateOperationsInput | string | null
    searchHistory?: SearchHistoryUpdateOneWithoutPodcastsNestedInput
    genres?: GenreUpdateManyWithoutPodcastsNestedInput
    episodes?: EpisodeUpdateManyWithoutPodcastNestedInput
  }

  export type PodcastUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionId?: IntFieldUpdateOperationsInput | number
    trackId?: IntFieldUpdateOperationsInput | number
    artistName?: NullableStringFieldUpdateOperationsInput | string | null
    collectionName?: StringFieldUpdateOperationsInput | string
    trackName?: StringFieldUpdateOperationsInput | string
    collectionViewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    feedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl30?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl60?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl100?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl600?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trackTimeMillis?: NullableIntFieldUpdateOperationsInput | number | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    primaryGenreName?: NullableStringFieldUpdateOperationsInput | string | null
    contentAdvisoryRating?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl30_2x?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl60_2x?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl100_2x?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl600_2x?: NullableStringFieldUpdateOperationsInput | string | null
    artistViewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trackCensoredName?: NullableStringFieldUpdateOperationsInput | string | null
    collectionCensoredName?: NullableStringFieldUpdateOperationsInput | string | null
    artistId?: NullableIntFieldUpdateOperationsInput | number | null
    collectionPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    trackPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    collectionHdPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    trackHdPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    trackHdRentalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    collectionExplicitness?: NullableStringFieldUpdateOperationsInput | string | null
    trackExplicitness?: NullableStringFieldUpdateOperationsInput | string | null
    trackCount?: NullableIntFieldUpdateOperationsInput | number | null
    copyright?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    longDescription?: NullableStringFieldUpdateOperationsInput | string | null
    searchHistoryId?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: GenreUncheckedUpdateManyWithoutPodcastsNestedInput
    episodes?: EpisodeUncheckedUpdateManyWithoutPodcastNestedInput
  }

  export type PodcastCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    collectionId: number
    trackId: number
    artistName?: string | null
    collectionName: string
    trackName: string
    collectionViewUrl?: string | null
    feedUrl?: string | null
    artworkUrl30?: string | null
    artworkUrl60?: string | null
    artworkUrl100?: string | null
    artworkUrl600?: string | null
    releaseDate?: Date | string | null
    trackTimeMillis?: number | null
    country?: string | null
    currency?: string | null
    primaryGenreName?: string | null
    contentAdvisoryRating?: string | null
    artworkUrl30_2x?: string | null
    artworkUrl60_2x?: string | null
    artworkUrl100_2x?: string | null
    artworkUrl600_2x?: string | null
    artistViewUrl?: string | null
    trackCensoredName?: string | null
    collectionCensoredName?: string | null
    artistId?: number | null
    collectionPrice?: number | null
    trackPrice?: number | null
    collectionHdPrice?: number | null
    trackHdPrice?: number | null
    trackHdRentalPrice?: number | null
    collectionExplicitness?: string | null
    trackExplicitness?: string | null
    trackCount?: number | null
    copyright?: string | null
    description?: string | null
    shortDescription?: string | null
    longDescription?: string | null
    searchHistoryId?: string | null
  }

  export type PodcastUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionId?: IntFieldUpdateOperationsInput | number
    trackId?: IntFieldUpdateOperationsInput | number
    artistName?: NullableStringFieldUpdateOperationsInput | string | null
    collectionName?: StringFieldUpdateOperationsInput | string
    trackName?: StringFieldUpdateOperationsInput | string
    collectionViewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    feedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl30?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl60?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl100?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl600?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trackTimeMillis?: NullableIntFieldUpdateOperationsInput | number | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    primaryGenreName?: NullableStringFieldUpdateOperationsInput | string | null
    contentAdvisoryRating?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl30_2x?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl60_2x?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl100_2x?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl600_2x?: NullableStringFieldUpdateOperationsInput | string | null
    artistViewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trackCensoredName?: NullableStringFieldUpdateOperationsInput | string | null
    collectionCensoredName?: NullableStringFieldUpdateOperationsInput | string | null
    artistId?: NullableIntFieldUpdateOperationsInput | number | null
    collectionPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    trackPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    collectionHdPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    trackHdPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    trackHdRentalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    collectionExplicitness?: NullableStringFieldUpdateOperationsInput | string | null
    trackExplicitness?: NullableStringFieldUpdateOperationsInput | string | null
    trackCount?: NullableIntFieldUpdateOperationsInput | number | null
    copyright?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    longDescription?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PodcastUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionId?: IntFieldUpdateOperationsInput | number
    trackId?: IntFieldUpdateOperationsInput | number
    artistName?: NullableStringFieldUpdateOperationsInput | string | null
    collectionName?: StringFieldUpdateOperationsInput | string
    trackName?: StringFieldUpdateOperationsInput | string
    collectionViewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    feedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl30?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl60?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl100?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl600?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trackTimeMillis?: NullableIntFieldUpdateOperationsInput | number | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    primaryGenreName?: NullableStringFieldUpdateOperationsInput | string | null
    contentAdvisoryRating?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl30_2x?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl60_2x?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl100_2x?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl600_2x?: NullableStringFieldUpdateOperationsInput | string | null
    artistViewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trackCensoredName?: NullableStringFieldUpdateOperationsInput | string | null
    collectionCensoredName?: NullableStringFieldUpdateOperationsInput | string | null
    artistId?: NullableIntFieldUpdateOperationsInput | number | null
    collectionPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    trackPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    collectionHdPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    trackHdPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    trackHdRentalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    collectionExplicitness?: NullableStringFieldUpdateOperationsInput | string | null
    trackExplicitness?: NullableStringFieldUpdateOperationsInput | string | null
    trackCount?: NullableIntFieldUpdateOperationsInput | number | null
    copyright?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    longDescription?: NullableStringFieldUpdateOperationsInput | string | null
    searchHistoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GenreCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    podcasts?: PodcastCreateNestedManyWithoutGenresInput
  }

  export type GenreUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    podcasts?: PodcastUncheckedCreateNestedManyWithoutGenresInput
  }

  export type GenreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    podcasts?: PodcastUpdateManyWithoutGenresNestedInput
  }

  export type GenreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    podcasts?: PodcastUncheckedUpdateManyWithoutGenresNestedInput
  }

  export type GenreCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GenreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpisodeCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    title: string
    duration?: number | null
    pubDate?: Date | string | null
    guid?: string | null
    enclosureUrl?: string | null
    enclosureType?: string | null
    enclosureLength?: number | null
    itunesDuration?: string | null
    itunesExplicit?: boolean | null
    itunesImage?: string | null
    itunesOrder?: number | null
    itunesSubtitle?: string | null
    itunesSummary?: string | null
    itunesKeywords?: string | null
    itunesAuthor?: string | null
    podcast: PodcastCreateNestedOneWithoutEpisodesInput
  }

  export type EpisodeUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    podcastId: string
    title: string
    duration?: number | null
    pubDate?: Date | string | null
    guid?: string | null
    enclosureUrl?: string | null
    enclosureType?: string | null
    enclosureLength?: number | null
    itunesDuration?: string | null
    itunesExplicit?: boolean | null
    itunesImage?: string | null
    itunesOrder?: number | null
    itunesSubtitle?: string | null
    itunesSummary?: string | null
    itunesKeywords?: string | null
    itunesAuthor?: string | null
  }

  export type EpisodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    pubDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    enclosureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    enclosureType?: NullableStringFieldUpdateOperationsInput | string | null
    enclosureLength?: NullableIntFieldUpdateOperationsInput | number | null
    itunesDuration?: NullableStringFieldUpdateOperationsInput | string | null
    itunesExplicit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    itunesImage?: NullableStringFieldUpdateOperationsInput | string | null
    itunesOrder?: NullableIntFieldUpdateOperationsInput | number | null
    itunesSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    itunesSummary?: NullableStringFieldUpdateOperationsInput | string | null
    itunesKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    itunesAuthor?: NullableStringFieldUpdateOperationsInput | string | null
    podcast?: PodcastUpdateOneRequiredWithoutEpisodesNestedInput
  }

  export type EpisodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    podcastId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    pubDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    enclosureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    enclosureType?: NullableStringFieldUpdateOperationsInput | string | null
    enclosureLength?: NullableIntFieldUpdateOperationsInput | number | null
    itunesDuration?: NullableStringFieldUpdateOperationsInput | string | null
    itunesExplicit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    itunesImage?: NullableStringFieldUpdateOperationsInput | string | null
    itunesOrder?: NullableIntFieldUpdateOperationsInput | number | null
    itunesSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    itunesSummary?: NullableStringFieldUpdateOperationsInput | string | null
    itunesKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    itunesAuthor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EpisodeCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    podcastId: string
    title: string
    duration?: number | null
    pubDate?: Date | string | null
    guid?: string | null
    enclosureUrl?: string | null
    enclosureType?: string | null
    enclosureLength?: number | null
    itunesDuration?: string | null
    itunesExplicit?: boolean | null
    itunesImage?: string | null
    itunesOrder?: number | null
    itunesSubtitle?: string | null
    itunesSummary?: string | null
    itunesKeywords?: string | null
    itunesAuthor?: string | null
  }

  export type EpisodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    pubDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    enclosureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    enclosureType?: NullableStringFieldUpdateOperationsInput | string | null
    enclosureLength?: NullableIntFieldUpdateOperationsInput | number | null
    itunesDuration?: NullableStringFieldUpdateOperationsInput | string | null
    itunesExplicit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    itunesImage?: NullableStringFieldUpdateOperationsInput | string | null
    itunesOrder?: NullableIntFieldUpdateOperationsInput | number | null
    itunesSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    itunesSummary?: NullableStringFieldUpdateOperationsInput | string | null
    itunesKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    itunesAuthor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EpisodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    podcastId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    pubDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    enclosureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    enclosureType?: NullableStringFieldUpdateOperationsInput | string | null
    enclosureLength?: NullableIntFieldUpdateOperationsInput | number | null
    itunesDuration?: NullableStringFieldUpdateOperationsInput | string | null
    itunesExplicit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    itunesImage?: NullableStringFieldUpdateOperationsInput | string | null
    itunesOrder?: NullableIntFieldUpdateOperationsInput | number | null
    itunesSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    itunesSummary?: NullableStringFieldUpdateOperationsInput | string | null
    itunesKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    itunesAuthor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SearchHistoryCreateInput = {
    id?: string
    term: string
    resultCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    podcasts?: PodcastCreateNestedManyWithoutSearchHistoryInput
  }

  export type SearchHistoryUncheckedCreateInput = {
    id?: string
    term: string
    resultCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    podcasts?: PodcastUncheckedCreateNestedManyWithoutSearchHistoryInput
  }

  export type SearchHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    resultCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    podcasts?: PodcastUpdateManyWithoutSearchHistoryNestedInput
  }

  export type SearchHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    resultCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    podcasts?: PodcastUncheckedUpdateManyWithoutSearchHistoryNestedInput
  }

  export type SearchHistoryCreateManyInput = {
    id?: string
    term: string
    resultCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SearchHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    resultCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    resultCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type SearchHistoryNullableScalarRelationFilter = {
    is?: SearchHistoryWhereInput | null
    isNot?: SearchHistoryWhereInput | null
  }

  export type GenreListRelationFilter = {
    every?: GenreWhereInput
    some?: GenreWhereInput
    none?: GenreWhereInput
  }

  export type EpisodeListRelationFilter = {
    every?: EpisodeWhereInput
    some?: EpisodeWhereInput
    none?: EpisodeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GenreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EpisodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PodcastCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    collectionId?: SortOrder
    trackId?: SortOrder
    artistName?: SortOrder
    collectionName?: SortOrder
    trackName?: SortOrder
    collectionViewUrl?: SortOrder
    feedUrl?: SortOrder
    artworkUrl30?: SortOrder
    artworkUrl60?: SortOrder
    artworkUrl100?: SortOrder
    artworkUrl600?: SortOrder
    releaseDate?: SortOrder
    trackTimeMillis?: SortOrder
    country?: SortOrder
    currency?: SortOrder
    primaryGenreName?: SortOrder
    contentAdvisoryRating?: SortOrder
    artworkUrl30_2x?: SortOrder
    artworkUrl60_2x?: SortOrder
    artworkUrl100_2x?: SortOrder
    artworkUrl600_2x?: SortOrder
    artistViewUrl?: SortOrder
    trackCensoredName?: SortOrder
    collectionCensoredName?: SortOrder
    artistId?: SortOrder
    collectionPrice?: SortOrder
    trackPrice?: SortOrder
    collectionHdPrice?: SortOrder
    trackHdPrice?: SortOrder
    trackHdRentalPrice?: SortOrder
    collectionExplicitness?: SortOrder
    trackExplicitness?: SortOrder
    trackCount?: SortOrder
    copyright?: SortOrder
    description?: SortOrder
    shortDescription?: SortOrder
    longDescription?: SortOrder
    searchHistoryId?: SortOrder
  }

  export type PodcastAvgOrderByAggregateInput = {
    collectionId?: SortOrder
    trackId?: SortOrder
    trackTimeMillis?: SortOrder
    artistId?: SortOrder
    collectionPrice?: SortOrder
    trackPrice?: SortOrder
    collectionHdPrice?: SortOrder
    trackHdPrice?: SortOrder
    trackHdRentalPrice?: SortOrder
    trackCount?: SortOrder
  }

  export type PodcastMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    collectionId?: SortOrder
    trackId?: SortOrder
    artistName?: SortOrder
    collectionName?: SortOrder
    trackName?: SortOrder
    collectionViewUrl?: SortOrder
    feedUrl?: SortOrder
    artworkUrl30?: SortOrder
    artworkUrl60?: SortOrder
    artworkUrl100?: SortOrder
    artworkUrl600?: SortOrder
    releaseDate?: SortOrder
    trackTimeMillis?: SortOrder
    country?: SortOrder
    currency?: SortOrder
    primaryGenreName?: SortOrder
    contentAdvisoryRating?: SortOrder
    artworkUrl30_2x?: SortOrder
    artworkUrl60_2x?: SortOrder
    artworkUrl100_2x?: SortOrder
    artworkUrl600_2x?: SortOrder
    artistViewUrl?: SortOrder
    trackCensoredName?: SortOrder
    collectionCensoredName?: SortOrder
    artistId?: SortOrder
    collectionPrice?: SortOrder
    trackPrice?: SortOrder
    collectionHdPrice?: SortOrder
    trackHdPrice?: SortOrder
    trackHdRentalPrice?: SortOrder
    collectionExplicitness?: SortOrder
    trackExplicitness?: SortOrder
    trackCount?: SortOrder
    copyright?: SortOrder
    description?: SortOrder
    shortDescription?: SortOrder
    longDescription?: SortOrder
    searchHistoryId?: SortOrder
  }

  export type PodcastMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    collectionId?: SortOrder
    trackId?: SortOrder
    artistName?: SortOrder
    collectionName?: SortOrder
    trackName?: SortOrder
    collectionViewUrl?: SortOrder
    feedUrl?: SortOrder
    artworkUrl30?: SortOrder
    artworkUrl60?: SortOrder
    artworkUrl100?: SortOrder
    artworkUrl600?: SortOrder
    releaseDate?: SortOrder
    trackTimeMillis?: SortOrder
    country?: SortOrder
    currency?: SortOrder
    primaryGenreName?: SortOrder
    contentAdvisoryRating?: SortOrder
    artworkUrl30_2x?: SortOrder
    artworkUrl60_2x?: SortOrder
    artworkUrl100_2x?: SortOrder
    artworkUrl600_2x?: SortOrder
    artistViewUrl?: SortOrder
    trackCensoredName?: SortOrder
    collectionCensoredName?: SortOrder
    artistId?: SortOrder
    collectionPrice?: SortOrder
    trackPrice?: SortOrder
    collectionHdPrice?: SortOrder
    trackHdPrice?: SortOrder
    trackHdRentalPrice?: SortOrder
    collectionExplicitness?: SortOrder
    trackExplicitness?: SortOrder
    trackCount?: SortOrder
    copyright?: SortOrder
    description?: SortOrder
    shortDescription?: SortOrder
    longDescription?: SortOrder
    searchHistoryId?: SortOrder
  }

  export type PodcastSumOrderByAggregateInput = {
    collectionId?: SortOrder
    trackId?: SortOrder
    trackTimeMillis?: SortOrder
    artistId?: SortOrder
    collectionPrice?: SortOrder
    trackPrice?: SortOrder
    collectionHdPrice?: SortOrder
    trackHdPrice?: SortOrder
    trackHdRentalPrice?: SortOrder
    trackCount?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type PodcastListRelationFilter = {
    every?: PodcastWhereInput
    some?: PodcastWhereInput
    none?: PodcastWhereInput
  }

  export type PodcastOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GenreCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GenreMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GenreMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type PodcastScalarRelationFilter = {
    is?: PodcastWhereInput
    isNot?: PodcastWhereInput
  }

  export type EpisodeCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrder
    podcastId?: SortOrder
    title?: SortOrder
    duration?: SortOrder
    pubDate?: SortOrder
    guid?: SortOrder
    enclosureUrl?: SortOrder
    enclosureType?: SortOrder
    enclosureLength?: SortOrder
    itunesDuration?: SortOrder
    itunesExplicit?: SortOrder
    itunesImage?: SortOrder
    itunesOrder?: SortOrder
    itunesSubtitle?: SortOrder
    itunesSummary?: SortOrder
    itunesKeywords?: SortOrder
    itunesAuthor?: SortOrder
  }

  export type EpisodeAvgOrderByAggregateInput = {
    duration?: SortOrder
    enclosureLength?: SortOrder
    itunesOrder?: SortOrder
  }

  export type EpisodeMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrder
    podcastId?: SortOrder
    title?: SortOrder
    duration?: SortOrder
    pubDate?: SortOrder
    guid?: SortOrder
    enclosureUrl?: SortOrder
    enclosureType?: SortOrder
    enclosureLength?: SortOrder
    itunesDuration?: SortOrder
    itunesExplicit?: SortOrder
    itunesImage?: SortOrder
    itunesOrder?: SortOrder
    itunesSubtitle?: SortOrder
    itunesSummary?: SortOrder
    itunesKeywords?: SortOrder
    itunesAuthor?: SortOrder
  }

  export type EpisodeMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrder
    podcastId?: SortOrder
    title?: SortOrder
    duration?: SortOrder
    pubDate?: SortOrder
    guid?: SortOrder
    enclosureUrl?: SortOrder
    enclosureType?: SortOrder
    enclosureLength?: SortOrder
    itunesDuration?: SortOrder
    itunesExplicit?: SortOrder
    itunesImage?: SortOrder
    itunesOrder?: SortOrder
    itunesSubtitle?: SortOrder
    itunesSummary?: SortOrder
    itunesKeywords?: SortOrder
    itunesAuthor?: SortOrder
  }

  export type EpisodeSumOrderByAggregateInput = {
    duration?: SortOrder
    enclosureLength?: SortOrder
    itunesOrder?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type SearchHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    term?: SortOrder
    resultCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SearchHistoryAvgOrderByAggregateInput = {
    resultCount?: SortOrder
  }

  export type SearchHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    term?: SortOrder
    resultCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SearchHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    term?: SortOrder
    resultCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SearchHistorySumOrderByAggregateInput = {
    resultCount?: SortOrder
  }

  export type SearchHistoryCreateNestedOneWithoutPodcastsInput = {
    create?: XOR<SearchHistoryCreateWithoutPodcastsInput, SearchHistoryUncheckedCreateWithoutPodcastsInput>
    connectOrCreate?: SearchHistoryCreateOrConnectWithoutPodcastsInput
    connect?: SearchHistoryWhereUniqueInput
  }

  export type GenreCreateNestedManyWithoutPodcastsInput = {
    create?: XOR<GenreCreateWithoutPodcastsInput, GenreUncheckedCreateWithoutPodcastsInput> | GenreCreateWithoutPodcastsInput[] | GenreUncheckedCreateWithoutPodcastsInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutPodcastsInput | GenreCreateOrConnectWithoutPodcastsInput[]
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
  }

  export type EpisodeCreateNestedManyWithoutPodcastInput = {
    create?: XOR<EpisodeCreateWithoutPodcastInput, EpisodeUncheckedCreateWithoutPodcastInput> | EpisodeCreateWithoutPodcastInput[] | EpisodeUncheckedCreateWithoutPodcastInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutPodcastInput | EpisodeCreateOrConnectWithoutPodcastInput[]
    createMany?: EpisodeCreateManyPodcastInputEnvelope
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
  }

  export type GenreUncheckedCreateNestedManyWithoutPodcastsInput = {
    create?: XOR<GenreCreateWithoutPodcastsInput, GenreUncheckedCreateWithoutPodcastsInput> | GenreCreateWithoutPodcastsInput[] | GenreUncheckedCreateWithoutPodcastsInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutPodcastsInput | GenreCreateOrConnectWithoutPodcastsInput[]
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
  }

  export type EpisodeUncheckedCreateNestedManyWithoutPodcastInput = {
    create?: XOR<EpisodeCreateWithoutPodcastInput, EpisodeUncheckedCreateWithoutPodcastInput> | EpisodeCreateWithoutPodcastInput[] | EpisodeUncheckedCreateWithoutPodcastInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutPodcastInput | EpisodeCreateOrConnectWithoutPodcastInput[]
    createMany?: EpisodeCreateManyPodcastInputEnvelope
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SearchHistoryUpdateOneWithoutPodcastsNestedInput = {
    create?: XOR<SearchHistoryCreateWithoutPodcastsInput, SearchHistoryUncheckedCreateWithoutPodcastsInput>
    connectOrCreate?: SearchHistoryCreateOrConnectWithoutPodcastsInput
    upsert?: SearchHistoryUpsertWithoutPodcastsInput
    disconnect?: SearchHistoryWhereInput | boolean
    delete?: SearchHistoryWhereInput | boolean
    connect?: SearchHistoryWhereUniqueInput
    update?: XOR<XOR<SearchHistoryUpdateToOneWithWhereWithoutPodcastsInput, SearchHistoryUpdateWithoutPodcastsInput>, SearchHistoryUncheckedUpdateWithoutPodcastsInput>
  }

  export type GenreUpdateManyWithoutPodcastsNestedInput = {
    create?: XOR<GenreCreateWithoutPodcastsInput, GenreUncheckedCreateWithoutPodcastsInput> | GenreCreateWithoutPodcastsInput[] | GenreUncheckedCreateWithoutPodcastsInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutPodcastsInput | GenreCreateOrConnectWithoutPodcastsInput[]
    upsert?: GenreUpsertWithWhereUniqueWithoutPodcastsInput | GenreUpsertWithWhereUniqueWithoutPodcastsInput[]
    set?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    disconnect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    delete?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    update?: GenreUpdateWithWhereUniqueWithoutPodcastsInput | GenreUpdateWithWhereUniqueWithoutPodcastsInput[]
    updateMany?: GenreUpdateManyWithWhereWithoutPodcastsInput | GenreUpdateManyWithWhereWithoutPodcastsInput[]
    deleteMany?: GenreScalarWhereInput | GenreScalarWhereInput[]
  }

  export type EpisodeUpdateManyWithoutPodcastNestedInput = {
    create?: XOR<EpisodeCreateWithoutPodcastInput, EpisodeUncheckedCreateWithoutPodcastInput> | EpisodeCreateWithoutPodcastInput[] | EpisodeUncheckedCreateWithoutPodcastInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutPodcastInput | EpisodeCreateOrConnectWithoutPodcastInput[]
    upsert?: EpisodeUpsertWithWhereUniqueWithoutPodcastInput | EpisodeUpsertWithWhereUniqueWithoutPodcastInput[]
    createMany?: EpisodeCreateManyPodcastInputEnvelope
    set?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    disconnect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    delete?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    update?: EpisodeUpdateWithWhereUniqueWithoutPodcastInput | EpisodeUpdateWithWhereUniqueWithoutPodcastInput[]
    updateMany?: EpisodeUpdateManyWithWhereWithoutPodcastInput | EpisodeUpdateManyWithWhereWithoutPodcastInput[]
    deleteMany?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
  }

  export type GenreUncheckedUpdateManyWithoutPodcastsNestedInput = {
    create?: XOR<GenreCreateWithoutPodcastsInput, GenreUncheckedCreateWithoutPodcastsInput> | GenreCreateWithoutPodcastsInput[] | GenreUncheckedCreateWithoutPodcastsInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutPodcastsInput | GenreCreateOrConnectWithoutPodcastsInput[]
    upsert?: GenreUpsertWithWhereUniqueWithoutPodcastsInput | GenreUpsertWithWhereUniqueWithoutPodcastsInput[]
    set?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    disconnect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    delete?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    update?: GenreUpdateWithWhereUniqueWithoutPodcastsInput | GenreUpdateWithWhereUniqueWithoutPodcastsInput[]
    updateMany?: GenreUpdateManyWithWhereWithoutPodcastsInput | GenreUpdateManyWithWhereWithoutPodcastsInput[]
    deleteMany?: GenreScalarWhereInput | GenreScalarWhereInput[]
  }

  export type EpisodeUncheckedUpdateManyWithoutPodcastNestedInput = {
    create?: XOR<EpisodeCreateWithoutPodcastInput, EpisodeUncheckedCreateWithoutPodcastInput> | EpisodeCreateWithoutPodcastInput[] | EpisodeUncheckedCreateWithoutPodcastInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutPodcastInput | EpisodeCreateOrConnectWithoutPodcastInput[]
    upsert?: EpisodeUpsertWithWhereUniqueWithoutPodcastInput | EpisodeUpsertWithWhereUniqueWithoutPodcastInput[]
    createMany?: EpisodeCreateManyPodcastInputEnvelope
    set?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    disconnect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    delete?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    update?: EpisodeUpdateWithWhereUniqueWithoutPodcastInput | EpisodeUpdateWithWhereUniqueWithoutPodcastInput[]
    updateMany?: EpisodeUpdateManyWithWhereWithoutPodcastInput | EpisodeUpdateManyWithWhereWithoutPodcastInput[]
    deleteMany?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
  }

  export type PodcastCreateNestedManyWithoutGenresInput = {
    create?: XOR<PodcastCreateWithoutGenresInput, PodcastUncheckedCreateWithoutGenresInput> | PodcastCreateWithoutGenresInput[] | PodcastUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: PodcastCreateOrConnectWithoutGenresInput | PodcastCreateOrConnectWithoutGenresInput[]
    connect?: PodcastWhereUniqueInput | PodcastWhereUniqueInput[]
  }

  export type PodcastUncheckedCreateNestedManyWithoutGenresInput = {
    create?: XOR<PodcastCreateWithoutGenresInput, PodcastUncheckedCreateWithoutGenresInput> | PodcastCreateWithoutGenresInput[] | PodcastUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: PodcastCreateOrConnectWithoutGenresInput | PodcastCreateOrConnectWithoutGenresInput[]
    connect?: PodcastWhereUniqueInput | PodcastWhereUniqueInput[]
  }

  export type PodcastUpdateManyWithoutGenresNestedInput = {
    create?: XOR<PodcastCreateWithoutGenresInput, PodcastUncheckedCreateWithoutGenresInput> | PodcastCreateWithoutGenresInput[] | PodcastUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: PodcastCreateOrConnectWithoutGenresInput | PodcastCreateOrConnectWithoutGenresInput[]
    upsert?: PodcastUpsertWithWhereUniqueWithoutGenresInput | PodcastUpsertWithWhereUniqueWithoutGenresInput[]
    set?: PodcastWhereUniqueInput | PodcastWhereUniqueInput[]
    disconnect?: PodcastWhereUniqueInput | PodcastWhereUniqueInput[]
    delete?: PodcastWhereUniqueInput | PodcastWhereUniqueInput[]
    connect?: PodcastWhereUniqueInput | PodcastWhereUniqueInput[]
    update?: PodcastUpdateWithWhereUniqueWithoutGenresInput | PodcastUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: PodcastUpdateManyWithWhereWithoutGenresInput | PodcastUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: PodcastScalarWhereInput | PodcastScalarWhereInput[]
  }

  export type PodcastUncheckedUpdateManyWithoutGenresNestedInput = {
    create?: XOR<PodcastCreateWithoutGenresInput, PodcastUncheckedCreateWithoutGenresInput> | PodcastCreateWithoutGenresInput[] | PodcastUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: PodcastCreateOrConnectWithoutGenresInput | PodcastCreateOrConnectWithoutGenresInput[]
    upsert?: PodcastUpsertWithWhereUniqueWithoutGenresInput | PodcastUpsertWithWhereUniqueWithoutGenresInput[]
    set?: PodcastWhereUniqueInput | PodcastWhereUniqueInput[]
    disconnect?: PodcastWhereUniqueInput | PodcastWhereUniqueInput[]
    delete?: PodcastWhereUniqueInput | PodcastWhereUniqueInput[]
    connect?: PodcastWhereUniqueInput | PodcastWhereUniqueInput[]
    update?: PodcastUpdateWithWhereUniqueWithoutGenresInput | PodcastUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: PodcastUpdateManyWithWhereWithoutGenresInput | PodcastUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: PodcastScalarWhereInput | PodcastScalarWhereInput[]
  }

  export type PodcastCreateNestedOneWithoutEpisodesInput = {
    create?: XOR<PodcastCreateWithoutEpisodesInput, PodcastUncheckedCreateWithoutEpisodesInput>
    connectOrCreate?: PodcastCreateOrConnectWithoutEpisodesInput
    connect?: PodcastWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type PodcastUpdateOneRequiredWithoutEpisodesNestedInput = {
    create?: XOR<PodcastCreateWithoutEpisodesInput, PodcastUncheckedCreateWithoutEpisodesInput>
    connectOrCreate?: PodcastCreateOrConnectWithoutEpisodesInput
    upsert?: PodcastUpsertWithoutEpisodesInput
    connect?: PodcastWhereUniqueInput
    update?: XOR<XOR<PodcastUpdateToOneWithWhereWithoutEpisodesInput, PodcastUpdateWithoutEpisodesInput>, PodcastUncheckedUpdateWithoutEpisodesInput>
  }

  export type PodcastCreateNestedManyWithoutSearchHistoryInput = {
    create?: XOR<PodcastCreateWithoutSearchHistoryInput, PodcastUncheckedCreateWithoutSearchHistoryInput> | PodcastCreateWithoutSearchHistoryInput[] | PodcastUncheckedCreateWithoutSearchHistoryInput[]
    connectOrCreate?: PodcastCreateOrConnectWithoutSearchHistoryInput | PodcastCreateOrConnectWithoutSearchHistoryInput[]
    createMany?: PodcastCreateManySearchHistoryInputEnvelope
    connect?: PodcastWhereUniqueInput | PodcastWhereUniqueInput[]
  }

  export type PodcastUncheckedCreateNestedManyWithoutSearchHistoryInput = {
    create?: XOR<PodcastCreateWithoutSearchHistoryInput, PodcastUncheckedCreateWithoutSearchHistoryInput> | PodcastCreateWithoutSearchHistoryInput[] | PodcastUncheckedCreateWithoutSearchHistoryInput[]
    connectOrCreate?: PodcastCreateOrConnectWithoutSearchHistoryInput | PodcastCreateOrConnectWithoutSearchHistoryInput[]
    createMany?: PodcastCreateManySearchHistoryInputEnvelope
    connect?: PodcastWhereUniqueInput | PodcastWhereUniqueInput[]
  }

  export type PodcastUpdateManyWithoutSearchHistoryNestedInput = {
    create?: XOR<PodcastCreateWithoutSearchHistoryInput, PodcastUncheckedCreateWithoutSearchHistoryInput> | PodcastCreateWithoutSearchHistoryInput[] | PodcastUncheckedCreateWithoutSearchHistoryInput[]
    connectOrCreate?: PodcastCreateOrConnectWithoutSearchHistoryInput | PodcastCreateOrConnectWithoutSearchHistoryInput[]
    upsert?: PodcastUpsertWithWhereUniqueWithoutSearchHistoryInput | PodcastUpsertWithWhereUniqueWithoutSearchHistoryInput[]
    createMany?: PodcastCreateManySearchHistoryInputEnvelope
    set?: PodcastWhereUniqueInput | PodcastWhereUniqueInput[]
    disconnect?: PodcastWhereUniqueInput | PodcastWhereUniqueInput[]
    delete?: PodcastWhereUniqueInput | PodcastWhereUniqueInput[]
    connect?: PodcastWhereUniqueInput | PodcastWhereUniqueInput[]
    update?: PodcastUpdateWithWhereUniqueWithoutSearchHistoryInput | PodcastUpdateWithWhereUniqueWithoutSearchHistoryInput[]
    updateMany?: PodcastUpdateManyWithWhereWithoutSearchHistoryInput | PodcastUpdateManyWithWhereWithoutSearchHistoryInput[]
    deleteMany?: PodcastScalarWhereInput | PodcastScalarWhereInput[]
  }

  export type PodcastUncheckedUpdateManyWithoutSearchHistoryNestedInput = {
    create?: XOR<PodcastCreateWithoutSearchHistoryInput, PodcastUncheckedCreateWithoutSearchHistoryInput> | PodcastCreateWithoutSearchHistoryInput[] | PodcastUncheckedCreateWithoutSearchHistoryInput[]
    connectOrCreate?: PodcastCreateOrConnectWithoutSearchHistoryInput | PodcastCreateOrConnectWithoutSearchHistoryInput[]
    upsert?: PodcastUpsertWithWhereUniqueWithoutSearchHistoryInput | PodcastUpsertWithWhereUniqueWithoutSearchHistoryInput[]
    createMany?: PodcastCreateManySearchHistoryInputEnvelope
    set?: PodcastWhereUniqueInput | PodcastWhereUniqueInput[]
    disconnect?: PodcastWhereUniqueInput | PodcastWhereUniqueInput[]
    delete?: PodcastWhereUniqueInput | PodcastWhereUniqueInput[]
    connect?: PodcastWhereUniqueInput | PodcastWhereUniqueInput[]
    update?: PodcastUpdateWithWhereUniqueWithoutSearchHistoryInput | PodcastUpdateWithWhereUniqueWithoutSearchHistoryInput[]
    updateMany?: PodcastUpdateManyWithWhereWithoutSearchHistoryInput | PodcastUpdateManyWithWhereWithoutSearchHistoryInput[]
    deleteMany?: PodcastScalarWhereInput | PodcastScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type SearchHistoryCreateWithoutPodcastsInput = {
    id?: string
    term: string
    resultCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SearchHistoryUncheckedCreateWithoutPodcastsInput = {
    id?: string
    term: string
    resultCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SearchHistoryCreateOrConnectWithoutPodcastsInput = {
    where: SearchHistoryWhereUniqueInput
    create: XOR<SearchHistoryCreateWithoutPodcastsInput, SearchHistoryUncheckedCreateWithoutPodcastsInput>
  }

  export type GenreCreateWithoutPodcastsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GenreUncheckedCreateWithoutPodcastsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GenreCreateOrConnectWithoutPodcastsInput = {
    where: GenreWhereUniqueInput
    create: XOR<GenreCreateWithoutPodcastsInput, GenreUncheckedCreateWithoutPodcastsInput>
  }

  export type EpisodeCreateWithoutPodcastInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    title: string
    duration?: number | null
    pubDate?: Date | string | null
    guid?: string | null
    enclosureUrl?: string | null
    enclosureType?: string | null
    enclosureLength?: number | null
    itunesDuration?: string | null
    itunesExplicit?: boolean | null
    itunesImage?: string | null
    itunesOrder?: number | null
    itunesSubtitle?: string | null
    itunesSummary?: string | null
    itunesKeywords?: string | null
    itunesAuthor?: string | null
  }

  export type EpisodeUncheckedCreateWithoutPodcastInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    title: string
    duration?: number | null
    pubDate?: Date | string | null
    guid?: string | null
    enclosureUrl?: string | null
    enclosureType?: string | null
    enclosureLength?: number | null
    itunesDuration?: string | null
    itunesExplicit?: boolean | null
    itunesImage?: string | null
    itunesOrder?: number | null
    itunesSubtitle?: string | null
    itunesSummary?: string | null
    itunesKeywords?: string | null
    itunesAuthor?: string | null
  }

  export type EpisodeCreateOrConnectWithoutPodcastInput = {
    where: EpisodeWhereUniqueInput
    create: XOR<EpisodeCreateWithoutPodcastInput, EpisodeUncheckedCreateWithoutPodcastInput>
  }

  export type EpisodeCreateManyPodcastInputEnvelope = {
    data: EpisodeCreateManyPodcastInput | EpisodeCreateManyPodcastInput[]
    skipDuplicates?: boolean
  }

  export type SearchHistoryUpsertWithoutPodcastsInput = {
    update: XOR<SearchHistoryUpdateWithoutPodcastsInput, SearchHistoryUncheckedUpdateWithoutPodcastsInput>
    create: XOR<SearchHistoryCreateWithoutPodcastsInput, SearchHistoryUncheckedCreateWithoutPodcastsInput>
    where?: SearchHistoryWhereInput
  }

  export type SearchHistoryUpdateToOneWithWhereWithoutPodcastsInput = {
    where?: SearchHistoryWhereInput
    data: XOR<SearchHistoryUpdateWithoutPodcastsInput, SearchHistoryUncheckedUpdateWithoutPodcastsInput>
  }

  export type SearchHistoryUpdateWithoutPodcastsInput = {
    id?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    resultCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SearchHistoryUncheckedUpdateWithoutPodcastsInput = {
    id?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    resultCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenreUpsertWithWhereUniqueWithoutPodcastsInput = {
    where: GenreWhereUniqueInput
    update: XOR<GenreUpdateWithoutPodcastsInput, GenreUncheckedUpdateWithoutPodcastsInput>
    create: XOR<GenreCreateWithoutPodcastsInput, GenreUncheckedCreateWithoutPodcastsInput>
  }

  export type GenreUpdateWithWhereUniqueWithoutPodcastsInput = {
    where: GenreWhereUniqueInput
    data: XOR<GenreUpdateWithoutPodcastsInput, GenreUncheckedUpdateWithoutPodcastsInput>
  }

  export type GenreUpdateManyWithWhereWithoutPodcastsInput = {
    where: GenreScalarWhereInput
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyWithoutPodcastsInput>
  }

  export type GenreScalarWhereInput = {
    AND?: GenreScalarWhereInput | GenreScalarWhereInput[]
    OR?: GenreScalarWhereInput[]
    NOT?: GenreScalarWhereInput | GenreScalarWhereInput[]
    id?: StringFilter<"Genre"> | string
    name?: StringFilter<"Genre"> | string
    createdAt?: DateTimeFilter<"Genre"> | Date | string
    updatedAt?: DateTimeFilter<"Genre"> | Date | string
  }

  export type EpisodeUpsertWithWhereUniqueWithoutPodcastInput = {
    where: EpisodeWhereUniqueInput
    update: XOR<EpisodeUpdateWithoutPodcastInput, EpisodeUncheckedUpdateWithoutPodcastInput>
    create: XOR<EpisodeCreateWithoutPodcastInput, EpisodeUncheckedCreateWithoutPodcastInput>
  }

  export type EpisodeUpdateWithWhereUniqueWithoutPodcastInput = {
    where: EpisodeWhereUniqueInput
    data: XOR<EpisodeUpdateWithoutPodcastInput, EpisodeUncheckedUpdateWithoutPodcastInput>
  }

  export type EpisodeUpdateManyWithWhereWithoutPodcastInput = {
    where: EpisodeScalarWhereInput
    data: XOR<EpisodeUpdateManyMutationInput, EpisodeUncheckedUpdateManyWithoutPodcastInput>
  }

  export type EpisodeScalarWhereInput = {
    AND?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
    OR?: EpisodeScalarWhereInput[]
    NOT?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
    id?: StringFilter<"Episode"> | string
    createdAt?: DateTimeFilter<"Episode"> | Date | string
    updatedAt?: DateTimeFilter<"Episode"> | Date | string
    description?: StringNullableFilter<"Episode"> | string | null
    podcastId?: StringFilter<"Episode"> | string
    title?: StringFilter<"Episode"> | string
    duration?: IntNullableFilter<"Episode"> | number | null
    pubDate?: DateTimeNullableFilter<"Episode"> | Date | string | null
    guid?: StringNullableFilter<"Episode"> | string | null
    enclosureUrl?: StringNullableFilter<"Episode"> | string | null
    enclosureType?: StringNullableFilter<"Episode"> | string | null
    enclosureLength?: IntNullableFilter<"Episode"> | number | null
    itunesDuration?: StringNullableFilter<"Episode"> | string | null
    itunesExplicit?: BoolNullableFilter<"Episode"> | boolean | null
    itunesImage?: StringNullableFilter<"Episode"> | string | null
    itunesOrder?: IntNullableFilter<"Episode"> | number | null
    itunesSubtitle?: StringNullableFilter<"Episode"> | string | null
    itunesSummary?: StringNullableFilter<"Episode"> | string | null
    itunesKeywords?: StringNullableFilter<"Episode"> | string | null
    itunesAuthor?: StringNullableFilter<"Episode"> | string | null
  }

  export type PodcastCreateWithoutGenresInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    collectionId: number
    trackId: number
    artistName?: string | null
    collectionName: string
    trackName: string
    collectionViewUrl?: string | null
    feedUrl?: string | null
    artworkUrl30?: string | null
    artworkUrl60?: string | null
    artworkUrl100?: string | null
    artworkUrl600?: string | null
    releaseDate?: Date | string | null
    trackTimeMillis?: number | null
    country?: string | null
    currency?: string | null
    primaryGenreName?: string | null
    contentAdvisoryRating?: string | null
    artworkUrl30_2x?: string | null
    artworkUrl60_2x?: string | null
    artworkUrl100_2x?: string | null
    artworkUrl600_2x?: string | null
    artistViewUrl?: string | null
    trackCensoredName?: string | null
    collectionCensoredName?: string | null
    artistId?: number | null
    collectionPrice?: number | null
    trackPrice?: number | null
    collectionHdPrice?: number | null
    trackHdPrice?: number | null
    trackHdRentalPrice?: number | null
    collectionExplicitness?: string | null
    trackExplicitness?: string | null
    trackCount?: number | null
    copyright?: string | null
    description?: string | null
    shortDescription?: string | null
    longDescription?: string | null
    searchHistory?: SearchHistoryCreateNestedOneWithoutPodcastsInput
    episodes?: EpisodeCreateNestedManyWithoutPodcastInput
  }

  export type PodcastUncheckedCreateWithoutGenresInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    collectionId: number
    trackId: number
    artistName?: string | null
    collectionName: string
    trackName: string
    collectionViewUrl?: string | null
    feedUrl?: string | null
    artworkUrl30?: string | null
    artworkUrl60?: string | null
    artworkUrl100?: string | null
    artworkUrl600?: string | null
    releaseDate?: Date | string | null
    trackTimeMillis?: number | null
    country?: string | null
    currency?: string | null
    primaryGenreName?: string | null
    contentAdvisoryRating?: string | null
    artworkUrl30_2x?: string | null
    artworkUrl60_2x?: string | null
    artworkUrl100_2x?: string | null
    artworkUrl600_2x?: string | null
    artistViewUrl?: string | null
    trackCensoredName?: string | null
    collectionCensoredName?: string | null
    artistId?: number | null
    collectionPrice?: number | null
    trackPrice?: number | null
    collectionHdPrice?: number | null
    trackHdPrice?: number | null
    trackHdRentalPrice?: number | null
    collectionExplicitness?: string | null
    trackExplicitness?: string | null
    trackCount?: number | null
    copyright?: string | null
    description?: string | null
    shortDescription?: string | null
    longDescription?: string | null
    searchHistoryId?: string | null
    episodes?: EpisodeUncheckedCreateNestedManyWithoutPodcastInput
  }

  export type PodcastCreateOrConnectWithoutGenresInput = {
    where: PodcastWhereUniqueInput
    create: XOR<PodcastCreateWithoutGenresInput, PodcastUncheckedCreateWithoutGenresInput>
  }

  export type PodcastUpsertWithWhereUniqueWithoutGenresInput = {
    where: PodcastWhereUniqueInput
    update: XOR<PodcastUpdateWithoutGenresInput, PodcastUncheckedUpdateWithoutGenresInput>
    create: XOR<PodcastCreateWithoutGenresInput, PodcastUncheckedCreateWithoutGenresInput>
  }

  export type PodcastUpdateWithWhereUniqueWithoutGenresInput = {
    where: PodcastWhereUniqueInput
    data: XOR<PodcastUpdateWithoutGenresInput, PodcastUncheckedUpdateWithoutGenresInput>
  }

  export type PodcastUpdateManyWithWhereWithoutGenresInput = {
    where: PodcastScalarWhereInput
    data: XOR<PodcastUpdateManyMutationInput, PodcastUncheckedUpdateManyWithoutGenresInput>
  }

  export type PodcastScalarWhereInput = {
    AND?: PodcastScalarWhereInput | PodcastScalarWhereInput[]
    OR?: PodcastScalarWhereInput[]
    NOT?: PodcastScalarWhereInput | PodcastScalarWhereInput[]
    id?: StringFilter<"Podcast"> | string
    createdAt?: DateTimeFilter<"Podcast"> | Date | string
    updatedAt?: DateTimeFilter<"Podcast"> | Date | string
    collectionId?: IntFilter<"Podcast"> | number
    trackId?: IntFilter<"Podcast"> | number
    artistName?: StringNullableFilter<"Podcast"> | string | null
    collectionName?: StringFilter<"Podcast"> | string
    trackName?: StringFilter<"Podcast"> | string
    collectionViewUrl?: StringNullableFilter<"Podcast"> | string | null
    feedUrl?: StringNullableFilter<"Podcast"> | string | null
    artworkUrl30?: StringNullableFilter<"Podcast"> | string | null
    artworkUrl60?: StringNullableFilter<"Podcast"> | string | null
    artworkUrl100?: StringNullableFilter<"Podcast"> | string | null
    artworkUrl600?: StringNullableFilter<"Podcast"> | string | null
    releaseDate?: DateTimeNullableFilter<"Podcast"> | Date | string | null
    trackTimeMillis?: IntNullableFilter<"Podcast"> | number | null
    country?: StringNullableFilter<"Podcast"> | string | null
    currency?: StringNullableFilter<"Podcast"> | string | null
    primaryGenreName?: StringNullableFilter<"Podcast"> | string | null
    contentAdvisoryRating?: StringNullableFilter<"Podcast"> | string | null
    artworkUrl30_2x?: StringNullableFilter<"Podcast"> | string | null
    artworkUrl60_2x?: StringNullableFilter<"Podcast"> | string | null
    artworkUrl100_2x?: StringNullableFilter<"Podcast"> | string | null
    artworkUrl600_2x?: StringNullableFilter<"Podcast"> | string | null
    artistViewUrl?: StringNullableFilter<"Podcast"> | string | null
    trackCensoredName?: StringNullableFilter<"Podcast"> | string | null
    collectionCensoredName?: StringNullableFilter<"Podcast"> | string | null
    artistId?: IntNullableFilter<"Podcast"> | number | null
    collectionPrice?: FloatNullableFilter<"Podcast"> | number | null
    trackPrice?: FloatNullableFilter<"Podcast"> | number | null
    collectionHdPrice?: FloatNullableFilter<"Podcast"> | number | null
    trackHdPrice?: FloatNullableFilter<"Podcast"> | number | null
    trackHdRentalPrice?: FloatNullableFilter<"Podcast"> | number | null
    collectionExplicitness?: StringNullableFilter<"Podcast"> | string | null
    trackExplicitness?: StringNullableFilter<"Podcast"> | string | null
    trackCount?: IntNullableFilter<"Podcast"> | number | null
    copyright?: StringNullableFilter<"Podcast"> | string | null
    description?: StringNullableFilter<"Podcast"> | string | null
    shortDescription?: StringNullableFilter<"Podcast"> | string | null
    longDescription?: StringNullableFilter<"Podcast"> | string | null
    searchHistoryId?: StringNullableFilter<"Podcast"> | string | null
  }

  export type PodcastCreateWithoutEpisodesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    collectionId: number
    trackId: number
    artistName?: string | null
    collectionName: string
    trackName: string
    collectionViewUrl?: string | null
    feedUrl?: string | null
    artworkUrl30?: string | null
    artworkUrl60?: string | null
    artworkUrl100?: string | null
    artworkUrl600?: string | null
    releaseDate?: Date | string | null
    trackTimeMillis?: number | null
    country?: string | null
    currency?: string | null
    primaryGenreName?: string | null
    contentAdvisoryRating?: string | null
    artworkUrl30_2x?: string | null
    artworkUrl60_2x?: string | null
    artworkUrl100_2x?: string | null
    artworkUrl600_2x?: string | null
    artistViewUrl?: string | null
    trackCensoredName?: string | null
    collectionCensoredName?: string | null
    artistId?: number | null
    collectionPrice?: number | null
    trackPrice?: number | null
    collectionHdPrice?: number | null
    trackHdPrice?: number | null
    trackHdRentalPrice?: number | null
    collectionExplicitness?: string | null
    trackExplicitness?: string | null
    trackCount?: number | null
    copyright?: string | null
    description?: string | null
    shortDescription?: string | null
    longDescription?: string | null
    searchHistory?: SearchHistoryCreateNestedOneWithoutPodcastsInput
    genres?: GenreCreateNestedManyWithoutPodcastsInput
  }

  export type PodcastUncheckedCreateWithoutEpisodesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    collectionId: number
    trackId: number
    artistName?: string | null
    collectionName: string
    trackName: string
    collectionViewUrl?: string | null
    feedUrl?: string | null
    artworkUrl30?: string | null
    artworkUrl60?: string | null
    artworkUrl100?: string | null
    artworkUrl600?: string | null
    releaseDate?: Date | string | null
    trackTimeMillis?: number | null
    country?: string | null
    currency?: string | null
    primaryGenreName?: string | null
    contentAdvisoryRating?: string | null
    artworkUrl30_2x?: string | null
    artworkUrl60_2x?: string | null
    artworkUrl100_2x?: string | null
    artworkUrl600_2x?: string | null
    artistViewUrl?: string | null
    trackCensoredName?: string | null
    collectionCensoredName?: string | null
    artistId?: number | null
    collectionPrice?: number | null
    trackPrice?: number | null
    collectionHdPrice?: number | null
    trackHdPrice?: number | null
    trackHdRentalPrice?: number | null
    collectionExplicitness?: string | null
    trackExplicitness?: string | null
    trackCount?: number | null
    copyright?: string | null
    description?: string | null
    shortDescription?: string | null
    longDescription?: string | null
    searchHistoryId?: string | null
    genres?: GenreUncheckedCreateNestedManyWithoutPodcastsInput
  }

  export type PodcastCreateOrConnectWithoutEpisodesInput = {
    where: PodcastWhereUniqueInput
    create: XOR<PodcastCreateWithoutEpisodesInput, PodcastUncheckedCreateWithoutEpisodesInput>
  }

  export type PodcastUpsertWithoutEpisodesInput = {
    update: XOR<PodcastUpdateWithoutEpisodesInput, PodcastUncheckedUpdateWithoutEpisodesInput>
    create: XOR<PodcastCreateWithoutEpisodesInput, PodcastUncheckedCreateWithoutEpisodesInput>
    where?: PodcastWhereInput
  }

  export type PodcastUpdateToOneWithWhereWithoutEpisodesInput = {
    where?: PodcastWhereInput
    data: XOR<PodcastUpdateWithoutEpisodesInput, PodcastUncheckedUpdateWithoutEpisodesInput>
  }

  export type PodcastUpdateWithoutEpisodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionId?: IntFieldUpdateOperationsInput | number
    trackId?: IntFieldUpdateOperationsInput | number
    artistName?: NullableStringFieldUpdateOperationsInput | string | null
    collectionName?: StringFieldUpdateOperationsInput | string
    trackName?: StringFieldUpdateOperationsInput | string
    collectionViewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    feedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl30?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl60?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl100?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl600?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trackTimeMillis?: NullableIntFieldUpdateOperationsInput | number | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    primaryGenreName?: NullableStringFieldUpdateOperationsInput | string | null
    contentAdvisoryRating?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl30_2x?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl60_2x?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl100_2x?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl600_2x?: NullableStringFieldUpdateOperationsInput | string | null
    artistViewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trackCensoredName?: NullableStringFieldUpdateOperationsInput | string | null
    collectionCensoredName?: NullableStringFieldUpdateOperationsInput | string | null
    artistId?: NullableIntFieldUpdateOperationsInput | number | null
    collectionPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    trackPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    collectionHdPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    trackHdPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    trackHdRentalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    collectionExplicitness?: NullableStringFieldUpdateOperationsInput | string | null
    trackExplicitness?: NullableStringFieldUpdateOperationsInput | string | null
    trackCount?: NullableIntFieldUpdateOperationsInput | number | null
    copyright?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    longDescription?: NullableStringFieldUpdateOperationsInput | string | null
    searchHistory?: SearchHistoryUpdateOneWithoutPodcastsNestedInput
    genres?: GenreUpdateManyWithoutPodcastsNestedInput
  }

  export type PodcastUncheckedUpdateWithoutEpisodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionId?: IntFieldUpdateOperationsInput | number
    trackId?: IntFieldUpdateOperationsInput | number
    artistName?: NullableStringFieldUpdateOperationsInput | string | null
    collectionName?: StringFieldUpdateOperationsInput | string
    trackName?: StringFieldUpdateOperationsInput | string
    collectionViewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    feedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl30?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl60?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl100?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl600?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trackTimeMillis?: NullableIntFieldUpdateOperationsInput | number | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    primaryGenreName?: NullableStringFieldUpdateOperationsInput | string | null
    contentAdvisoryRating?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl30_2x?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl60_2x?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl100_2x?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl600_2x?: NullableStringFieldUpdateOperationsInput | string | null
    artistViewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trackCensoredName?: NullableStringFieldUpdateOperationsInput | string | null
    collectionCensoredName?: NullableStringFieldUpdateOperationsInput | string | null
    artistId?: NullableIntFieldUpdateOperationsInput | number | null
    collectionPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    trackPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    collectionHdPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    trackHdPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    trackHdRentalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    collectionExplicitness?: NullableStringFieldUpdateOperationsInput | string | null
    trackExplicitness?: NullableStringFieldUpdateOperationsInput | string | null
    trackCount?: NullableIntFieldUpdateOperationsInput | number | null
    copyright?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    longDescription?: NullableStringFieldUpdateOperationsInput | string | null
    searchHistoryId?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: GenreUncheckedUpdateManyWithoutPodcastsNestedInput
  }

  export type PodcastCreateWithoutSearchHistoryInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    collectionId: number
    trackId: number
    artistName?: string | null
    collectionName: string
    trackName: string
    collectionViewUrl?: string | null
    feedUrl?: string | null
    artworkUrl30?: string | null
    artworkUrl60?: string | null
    artworkUrl100?: string | null
    artworkUrl600?: string | null
    releaseDate?: Date | string | null
    trackTimeMillis?: number | null
    country?: string | null
    currency?: string | null
    primaryGenreName?: string | null
    contentAdvisoryRating?: string | null
    artworkUrl30_2x?: string | null
    artworkUrl60_2x?: string | null
    artworkUrl100_2x?: string | null
    artworkUrl600_2x?: string | null
    artistViewUrl?: string | null
    trackCensoredName?: string | null
    collectionCensoredName?: string | null
    artistId?: number | null
    collectionPrice?: number | null
    trackPrice?: number | null
    collectionHdPrice?: number | null
    trackHdPrice?: number | null
    trackHdRentalPrice?: number | null
    collectionExplicitness?: string | null
    trackExplicitness?: string | null
    trackCount?: number | null
    copyright?: string | null
    description?: string | null
    shortDescription?: string | null
    longDescription?: string | null
    genres?: GenreCreateNestedManyWithoutPodcastsInput
    episodes?: EpisodeCreateNestedManyWithoutPodcastInput
  }

  export type PodcastUncheckedCreateWithoutSearchHistoryInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    collectionId: number
    trackId: number
    artistName?: string | null
    collectionName: string
    trackName: string
    collectionViewUrl?: string | null
    feedUrl?: string | null
    artworkUrl30?: string | null
    artworkUrl60?: string | null
    artworkUrl100?: string | null
    artworkUrl600?: string | null
    releaseDate?: Date | string | null
    trackTimeMillis?: number | null
    country?: string | null
    currency?: string | null
    primaryGenreName?: string | null
    contentAdvisoryRating?: string | null
    artworkUrl30_2x?: string | null
    artworkUrl60_2x?: string | null
    artworkUrl100_2x?: string | null
    artworkUrl600_2x?: string | null
    artistViewUrl?: string | null
    trackCensoredName?: string | null
    collectionCensoredName?: string | null
    artistId?: number | null
    collectionPrice?: number | null
    trackPrice?: number | null
    collectionHdPrice?: number | null
    trackHdPrice?: number | null
    trackHdRentalPrice?: number | null
    collectionExplicitness?: string | null
    trackExplicitness?: string | null
    trackCount?: number | null
    copyright?: string | null
    description?: string | null
    shortDescription?: string | null
    longDescription?: string | null
    genres?: GenreUncheckedCreateNestedManyWithoutPodcastsInput
    episodes?: EpisodeUncheckedCreateNestedManyWithoutPodcastInput
  }

  export type PodcastCreateOrConnectWithoutSearchHistoryInput = {
    where: PodcastWhereUniqueInput
    create: XOR<PodcastCreateWithoutSearchHistoryInput, PodcastUncheckedCreateWithoutSearchHistoryInput>
  }

  export type PodcastCreateManySearchHistoryInputEnvelope = {
    data: PodcastCreateManySearchHistoryInput | PodcastCreateManySearchHistoryInput[]
    skipDuplicates?: boolean
  }

  export type PodcastUpsertWithWhereUniqueWithoutSearchHistoryInput = {
    where: PodcastWhereUniqueInput
    update: XOR<PodcastUpdateWithoutSearchHistoryInput, PodcastUncheckedUpdateWithoutSearchHistoryInput>
    create: XOR<PodcastCreateWithoutSearchHistoryInput, PodcastUncheckedCreateWithoutSearchHistoryInput>
  }

  export type PodcastUpdateWithWhereUniqueWithoutSearchHistoryInput = {
    where: PodcastWhereUniqueInput
    data: XOR<PodcastUpdateWithoutSearchHistoryInput, PodcastUncheckedUpdateWithoutSearchHistoryInput>
  }

  export type PodcastUpdateManyWithWhereWithoutSearchHistoryInput = {
    where: PodcastScalarWhereInput
    data: XOR<PodcastUpdateManyMutationInput, PodcastUncheckedUpdateManyWithoutSearchHistoryInput>
  }

  export type EpisodeCreateManyPodcastInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    title: string
    duration?: number | null
    pubDate?: Date | string | null
    guid?: string | null
    enclosureUrl?: string | null
    enclosureType?: string | null
    enclosureLength?: number | null
    itunesDuration?: string | null
    itunesExplicit?: boolean | null
    itunesImage?: string | null
    itunesOrder?: number | null
    itunesSubtitle?: string | null
    itunesSummary?: string | null
    itunesKeywords?: string | null
    itunesAuthor?: string | null
  }

  export type GenreUpdateWithoutPodcastsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenreUncheckedUpdateWithoutPodcastsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenreUncheckedUpdateManyWithoutPodcastsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpisodeUpdateWithoutPodcastInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    pubDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    enclosureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    enclosureType?: NullableStringFieldUpdateOperationsInput | string | null
    enclosureLength?: NullableIntFieldUpdateOperationsInput | number | null
    itunesDuration?: NullableStringFieldUpdateOperationsInput | string | null
    itunesExplicit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    itunesImage?: NullableStringFieldUpdateOperationsInput | string | null
    itunesOrder?: NullableIntFieldUpdateOperationsInput | number | null
    itunesSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    itunesSummary?: NullableStringFieldUpdateOperationsInput | string | null
    itunesKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    itunesAuthor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EpisodeUncheckedUpdateWithoutPodcastInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    pubDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    enclosureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    enclosureType?: NullableStringFieldUpdateOperationsInput | string | null
    enclosureLength?: NullableIntFieldUpdateOperationsInput | number | null
    itunesDuration?: NullableStringFieldUpdateOperationsInput | string | null
    itunesExplicit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    itunesImage?: NullableStringFieldUpdateOperationsInput | string | null
    itunesOrder?: NullableIntFieldUpdateOperationsInput | number | null
    itunesSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    itunesSummary?: NullableStringFieldUpdateOperationsInput | string | null
    itunesKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    itunesAuthor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EpisodeUncheckedUpdateManyWithoutPodcastInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    pubDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    enclosureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    enclosureType?: NullableStringFieldUpdateOperationsInput | string | null
    enclosureLength?: NullableIntFieldUpdateOperationsInput | number | null
    itunesDuration?: NullableStringFieldUpdateOperationsInput | string | null
    itunesExplicit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    itunesImage?: NullableStringFieldUpdateOperationsInput | string | null
    itunesOrder?: NullableIntFieldUpdateOperationsInput | number | null
    itunesSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    itunesSummary?: NullableStringFieldUpdateOperationsInput | string | null
    itunesKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    itunesAuthor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PodcastUpdateWithoutGenresInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionId?: IntFieldUpdateOperationsInput | number
    trackId?: IntFieldUpdateOperationsInput | number
    artistName?: NullableStringFieldUpdateOperationsInput | string | null
    collectionName?: StringFieldUpdateOperationsInput | string
    trackName?: StringFieldUpdateOperationsInput | string
    collectionViewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    feedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl30?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl60?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl100?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl600?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trackTimeMillis?: NullableIntFieldUpdateOperationsInput | number | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    primaryGenreName?: NullableStringFieldUpdateOperationsInput | string | null
    contentAdvisoryRating?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl30_2x?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl60_2x?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl100_2x?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl600_2x?: NullableStringFieldUpdateOperationsInput | string | null
    artistViewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trackCensoredName?: NullableStringFieldUpdateOperationsInput | string | null
    collectionCensoredName?: NullableStringFieldUpdateOperationsInput | string | null
    artistId?: NullableIntFieldUpdateOperationsInput | number | null
    collectionPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    trackPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    collectionHdPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    trackHdPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    trackHdRentalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    collectionExplicitness?: NullableStringFieldUpdateOperationsInput | string | null
    trackExplicitness?: NullableStringFieldUpdateOperationsInput | string | null
    trackCount?: NullableIntFieldUpdateOperationsInput | number | null
    copyright?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    longDescription?: NullableStringFieldUpdateOperationsInput | string | null
    searchHistory?: SearchHistoryUpdateOneWithoutPodcastsNestedInput
    episodes?: EpisodeUpdateManyWithoutPodcastNestedInput
  }

  export type PodcastUncheckedUpdateWithoutGenresInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionId?: IntFieldUpdateOperationsInput | number
    trackId?: IntFieldUpdateOperationsInput | number
    artistName?: NullableStringFieldUpdateOperationsInput | string | null
    collectionName?: StringFieldUpdateOperationsInput | string
    trackName?: StringFieldUpdateOperationsInput | string
    collectionViewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    feedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl30?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl60?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl100?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl600?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trackTimeMillis?: NullableIntFieldUpdateOperationsInput | number | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    primaryGenreName?: NullableStringFieldUpdateOperationsInput | string | null
    contentAdvisoryRating?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl30_2x?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl60_2x?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl100_2x?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl600_2x?: NullableStringFieldUpdateOperationsInput | string | null
    artistViewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trackCensoredName?: NullableStringFieldUpdateOperationsInput | string | null
    collectionCensoredName?: NullableStringFieldUpdateOperationsInput | string | null
    artistId?: NullableIntFieldUpdateOperationsInput | number | null
    collectionPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    trackPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    collectionHdPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    trackHdPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    trackHdRentalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    collectionExplicitness?: NullableStringFieldUpdateOperationsInput | string | null
    trackExplicitness?: NullableStringFieldUpdateOperationsInput | string | null
    trackCount?: NullableIntFieldUpdateOperationsInput | number | null
    copyright?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    longDescription?: NullableStringFieldUpdateOperationsInput | string | null
    searchHistoryId?: NullableStringFieldUpdateOperationsInput | string | null
    episodes?: EpisodeUncheckedUpdateManyWithoutPodcastNestedInput
  }

  export type PodcastUncheckedUpdateManyWithoutGenresInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionId?: IntFieldUpdateOperationsInput | number
    trackId?: IntFieldUpdateOperationsInput | number
    artistName?: NullableStringFieldUpdateOperationsInput | string | null
    collectionName?: StringFieldUpdateOperationsInput | string
    trackName?: StringFieldUpdateOperationsInput | string
    collectionViewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    feedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl30?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl60?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl100?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl600?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trackTimeMillis?: NullableIntFieldUpdateOperationsInput | number | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    primaryGenreName?: NullableStringFieldUpdateOperationsInput | string | null
    contentAdvisoryRating?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl30_2x?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl60_2x?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl100_2x?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl600_2x?: NullableStringFieldUpdateOperationsInput | string | null
    artistViewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trackCensoredName?: NullableStringFieldUpdateOperationsInput | string | null
    collectionCensoredName?: NullableStringFieldUpdateOperationsInput | string | null
    artistId?: NullableIntFieldUpdateOperationsInput | number | null
    collectionPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    trackPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    collectionHdPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    trackHdPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    trackHdRentalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    collectionExplicitness?: NullableStringFieldUpdateOperationsInput | string | null
    trackExplicitness?: NullableStringFieldUpdateOperationsInput | string | null
    trackCount?: NullableIntFieldUpdateOperationsInput | number | null
    copyright?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    longDescription?: NullableStringFieldUpdateOperationsInput | string | null
    searchHistoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PodcastCreateManySearchHistoryInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    collectionId: number
    trackId: number
    artistName?: string | null
    collectionName: string
    trackName: string
    collectionViewUrl?: string | null
    feedUrl?: string | null
    artworkUrl30?: string | null
    artworkUrl60?: string | null
    artworkUrl100?: string | null
    artworkUrl600?: string | null
    releaseDate?: Date | string | null
    trackTimeMillis?: number | null
    country?: string | null
    currency?: string | null
    primaryGenreName?: string | null
    contentAdvisoryRating?: string | null
    artworkUrl30_2x?: string | null
    artworkUrl60_2x?: string | null
    artworkUrl100_2x?: string | null
    artworkUrl600_2x?: string | null
    artistViewUrl?: string | null
    trackCensoredName?: string | null
    collectionCensoredName?: string | null
    artistId?: number | null
    collectionPrice?: number | null
    trackPrice?: number | null
    collectionHdPrice?: number | null
    trackHdPrice?: number | null
    trackHdRentalPrice?: number | null
    collectionExplicitness?: string | null
    trackExplicitness?: string | null
    trackCount?: number | null
    copyright?: string | null
    description?: string | null
    shortDescription?: string | null
    longDescription?: string | null
  }

  export type PodcastUpdateWithoutSearchHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionId?: IntFieldUpdateOperationsInput | number
    trackId?: IntFieldUpdateOperationsInput | number
    artistName?: NullableStringFieldUpdateOperationsInput | string | null
    collectionName?: StringFieldUpdateOperationsInput | string
    trackName?: StringFieldUpdateOperationsInput | string
    collectionViewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    feedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl30?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl60?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl100?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl600?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trackTimeMillis?: NullableIntFieldUpdateOperationsInput | number | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    primaryGenreName?: NullableStringFieldUpdateOperationsInput | string | null
    contentAdvisoryRating?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl30_2x?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl60_2x?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl100_2x?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl600_2x?: NullableStringFieldUpdateOperationsInput | string | null
    artistViewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trackCensoredName?: NullableStringFieldUpdateOperationsInput | string | null
    collectionCensoredName?: NullableStringFieldUpdateOperationsInput | string | null
    artistId?: NullableIntFieldUpdateOperationsInput | number | null
    collectionPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    trackPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    collectionHdPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    trackHdPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    trackHdRentalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    collectionExplicitness?: NullableStringFieldUpdateOperationsInput | string | null
    trackExplicitness?: NullableStringFieldUpdateOperationsInput | string | null
    trackCount?: NullableIntFieldUpdateOperationsInput | number | null
    copyright?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    longDescription?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: GenreUpdateManyWithoutPodcastsNestedInput
    episodes?: EpisodeUpdateManyWithoutPodcastNestedInput
  }

  export type PodcastUncheckedUpdateWithoutSearchHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionId?: IntFieldUpdateOperationsInput | number
    trackId?: IntFieldUpdateOperationsInput | number
    artistName?: NullableStringFieldUpdateOperationsInput | string | null
    collectionName?: StringFieldUpdateOperationsInput | string
    trackName?: StringFieldUpdateOperationsInput | string
    collectionViewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    feedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl30?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl60?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl100?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl600?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trackTimeMillis?: NullableIntFieldUpdateOperationsInput | number | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    primaryGenreName?: NullableStringFieldUpdateOperationsInput | string | null
    contentAdvisoryRating?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl30_2x?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl60_2x?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl100_2x?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl600_2x?: NullableStringFieldUpdateOperationsInput | string | null
    artistViewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trackCensoredName?: NullableStringFieldUpdateOperationsInput | string | null
    collectionCensoredName?: NullableStringFieldUpdateOperationsInput | string | null
    artistId?: NullableIntFieldUpdateOperationsInput | number | null
    collectionPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    trackPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    collectionHdPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    trackHdPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    trackHdRentalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    collectionExplicitness?: NullableStringFieldUpdateOperationsInput | string | null
    trackExplicitness?: NullableStringFieldUpdateOperationsInput | string | null
    trackCount?: NullableIntFieldUpdateOperationsInput | number | null
    copyright?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    longDescription?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: GenreUncheckedUpdateManyWithoutPodcastsNestedInput
    episodes?: EpisodeUncheckedUpdateManyWithoutPodcastNestedInput
  }

  export type PodcastUncheckedUpdateManyWithoutSearchHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionId?: IntFieldUpdateOperationsInput | number
    trackId?: IntFieldUpdateOperationsInput | number
    artistName?: NullableStringFieldUpdateOperationsInput | string | null
    collectionName?: StringFieldUpdateOperationsInput | string
    trackName?: StringFieldUpdateOperationsInput | string
    collectionViewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    feedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl30?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl60?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl100?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl600?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trackTimeMillis?: NullableIntFieldUpdateOperationsInput | number | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    primaryGenreName?: NullableStringFieldUpdateOperationsInput | string | null
    contentAdvisoryRating?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl30_2x?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl60_2x?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl100_2x?: NullableStringFieldUpdateOperationsInput | string | null
    artworkUrl600_2x?: NullableStringFieldUpdateOperationsInput | string | null
    artistViewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trackCensoredName?: NullableStringFieldUpdateOperationsInput | string | null
    collectionCensoredName?: NullableStringFieldUpdateOperationsInput | string | null
    artistId?: NullableIntFieldUpdateOperationsInput | number | null
    collectionPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    trackPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    collectionHdPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    trackHdPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    trackHdRentalPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    collectionExplicitness?: NullableStringFieldUpdateOperationsInput | string | null
    trackExplicitness?: NullableStringFieldUpdateOperationsInput | string | null
    trackCount?: NullableIntFieldUpdateOperationsInput | number | null
    copyright?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    longDescription?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}