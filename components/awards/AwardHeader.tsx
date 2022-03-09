interface AwardHeaderProps {
    title: string;
}

const AwardHeader = (props: AwardHeaderProps) => {

    return (
        <div className="row">
            <h1 className="text-center text-uppercase">{ props.title }</h1>
        </div>
    )
}

export default AwardHeader;