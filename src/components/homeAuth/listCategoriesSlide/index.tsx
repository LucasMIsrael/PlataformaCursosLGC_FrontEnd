import categoriesService from "@/src/services/categoriesService";
import useSWR from "swr";
import styles from "../../../../styles/slideCategory.module.scss";
import SlideComponent from "../../common/slideComponent";
import PageSpinner from "../../common/spinner";

interface props {
    categoryId: number;
    categoryName: string;
}

const ListCategoriesSlide = function ({ categoryId, categoryName }: props) {
    const { data, error } = useSWR
        (`/categories/${categoryId}`,
            () => categoriesService.getCourses(categoryId));

    if (error) return error;
    if (!data){
        return <PageSpinner />;
    }

    return (
        <>
            <p className={styles.titleCategory}>{categoryName}</p>
            <SlideComponent course={data.data.courses} />
        </>
    );
};

export default ListCategoriesSlide;