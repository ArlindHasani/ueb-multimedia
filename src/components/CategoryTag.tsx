
export default function CategoryTag(props: Category) {

    const {categoryName} = props

    return (
        <span className="cursor-pointer h-fit w-fit text-white text-sm rounded-xl px-3 py-1 bg-zinc-700/65">
            {categoryName}
        </span>
    )
}
