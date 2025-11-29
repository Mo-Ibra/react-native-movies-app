import { Client, TablesDB, ID, Query } from "react-native-appwrite";

const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const TABLE_ID = process.env.EXPO_PUBLIC_APPWRITE_TABLE_ID!;

const client = new Client()
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)
  .setEndpoint("https://cloud.appwrite.io/v1");

const tables = new TablesDB(client);

export const updateSearchCount = async (searchTerm: string, movie: Movie) => {
  try {
    const result = await tables.listRows({
      databaseId: DATABASE_ID,
      tableId: TABLE_ID,
      queries: [Query.equal("searchTerm", searchTerm)],
    });

    console.log(result);

    if (result.rows.length > 0) {
      const existing = result.rows[0];
      await tables.updateRow({
        databaseId: DATABASE_ID,
        tableId: TABLE_ID,
        rowId: existing.$id,
        data: {
          count: (existing.count as number) + 1,
        },
      });
    } else {
      await tables.createRow({
        databaseId: DATABASE_ID,
        tableId: TABLE_ID,
        rowId: ID.unique(),
        data: {
          searchTerm,
          movie_id: movie.id,
          title: movie.title,
          count: 1,
          poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        },
      });
    }
  } catch (error) {
    console.error("Error updating search count:", error);
    throw error;
  }
};

export const getTrendingMovies = async (): Promise<
  TrendingMovie[] | undefined
> => {
  try {
    const result = await tables.listRows({
      databaseId: DATABASE_ID,
      tableId: TABLE_ID,
      queries: [Query.limit(5), Query.orderDesc("count")],
    });

    return result.rows as unknown as TrendingMovie[];
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
