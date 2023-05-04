import Conference from "./conference1"
import Link from "next/link";


const ConContainer = () => {
    return (
        <section id="our-services" className="feat sub-bg section-padding">
            <div className="container">
                <div className="row">
                <div className="col-lg-12 col-md-12">
                    <div className="sec-head">
                    <h3 className="wow color-font wow fadeIn" data-wow-delay=".5s">
                        Our Conference.
                            </h3>
                    <div className="spacial text-center" style={{marginTop:"40px"}}>
                        <h6>
                            Our main Investor Vanguard Hedge Fund with 14,000 crores under
                            management hosted 1st International conference and announced 325 crores
                            FDI investment for Influence Media Corp
                        </h6>
                      </div>
                    </div>
                    </div>
                </div>
            </div>
            <Conference />
            <div className="col-12">
                <div className="text-center">
                    <Link
                     href="works/conference-details"
                    >
                        <button
                            type="submit"
                            className="nb butn bord curve mt-30"
                        >
                            <span>See More</span>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ConContainer