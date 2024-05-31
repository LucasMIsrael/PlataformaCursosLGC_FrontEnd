import api from "./api";
import { CourseType } from "./coursesService";

export type CategoryType = {
    id: number;
    name: string;
    position: number;
    courses?: CourseType[];
};

const categoriesService = {
    getCategories: async () => {
        const token = sessionStorage.getItem("skillup-token");

        const res = await api
            .get("/categories", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .catch((error) => {
                return error.response;
            });

        console.log(res)
        return res;
    },

    getCourses: async (id: number) => {
        const token = sessionStorage.getItem("skillup-token");

        const res = await api
            .get(`/categories/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .catch((error) => {
                return error.response;
            });

        return res;
    },
};

export default categoriesService