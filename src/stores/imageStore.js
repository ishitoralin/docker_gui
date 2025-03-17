import { defineStore } from 'pinia'
import { ref } from 'vue'
import DockerAPI from "@/models/dockerApi";
import { imagesListFields } from "@/init/fields";
import {
    handleGetVerticalTableItems,
} from "@/models/helper";

export const useImageStore = defineStore("imageStore", () => {
    const tableOptions = ref({
        perPage: 10,
        currentPage: 1,
        rows: 1,
        dropdown: [
            { key: 10, text: 10 },
            { key: 20, text: 20 },
            { key: 30, text: 30 },
            { key: 40, text: 40 },
            { key: 50, text: 50 },
            { key: "all", text: "All" },
        ],
    });
    const imageListTableItems = ref([]);
    const checkList = ref([])
    const fetchList = async () => {
        const response = await DockerAPI("getImageList");
        imageListTableItems.value = handleGetVerticalTableItems(
            imagesListFields.value["imageListTableFields"],
            response.result
        );
        tableOptions.value["rows"] = imageListTableItems.value.length;
        for (const element of response.result) {
            checkList.value.push({ key: element.Id, value: false })
        }
    };

    const fetchPullImage = async (name) => {
        const options = {
            queryParams: {
                fromImage: name,
            },
        };
        const response = await DockerAPI("postImagePull", options);
        if (response.status === 201) {
            await fetchList();
        }
    };

    return {
        imageListTableItems,
        tableOptions,
        checkList,
        fetchList,
        fetchPullImage,
    };
});