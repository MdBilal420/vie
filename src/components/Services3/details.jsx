

const Details = ({title,content}) => {

    return (
        
                <div className="cont">
                    <h5 className="cd-headline clip">
                    <span className="color-font fw-600">
                        {title}
                    </span>

                    {/* <Typewriter
                    // style={{ fontSize: "35px", lineHeight: "29px" }}
                    options={{
                        wrapperClassName: "color-font fw-600",
                        strings: ["Influencer marketing"],
                        //autoStart: true,
                        //loop: true,
                    }}
                    //loop={true}
                    onInit={(typewriter) => {
                        typewriter;
                    }}
                    /> */}
                    <span
                    style={{ fontSize: "16px", }}
                    className="cd-words-wrapper fw-300"
                    >
                    {content}
                    </span>
                    </h5>
                </div>
            
    )
}

export default Details