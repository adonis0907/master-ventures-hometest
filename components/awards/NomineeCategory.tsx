import styles from "@styles/awards/NomineeCategory.module.css"

interface NomineeCategoryProps {
    title: string;
}

const AwardHeader = (props: NomineeCategoryProps) => {

    return (
        <h2 className={ styles.category }>{ props.title }</h2>
    )
}

export default AwardHeader;