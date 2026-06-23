import { TextInput } from "react-native"

type SearchInputProps = {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
};

const SearchInput = ({ searchQuery, setSearchQuery }: SearchInputProps) => {
    return (
        <TextInput
            placeholder="Search tasks by title..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            style={{
                borderWidth: 1,
                borderColor: "#ddd",
                borderRadius: 10,
                padding: 12,
                backgroundColor: "#fff",
                marginTop: 10
            }}
        />
    )
}

export default SearchInput