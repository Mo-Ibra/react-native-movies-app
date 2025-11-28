import SearchBar from "@/components/SearchBar";
import { images } from "@/constants/images";
import { useRouter } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        resizeMode="contain"
        className="absolute w-full z-0"
      />

      <SearchBar
        onPress={() => router.push("/search")}
        placeholder="Search for a movie"
      />
    </View>
  );
}
