
import Link from "next/link";
import { IoIosPeople } from "react-icons/io";
import { FaSortAmountUp } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa";
import { IoMdReverseCamera } from 'react-icons/io';


const ServiceIntro = ({title,content,idx,service,setService}) => {

    let icon = ""

    switch(idx){
        case 0:
            icon = <FaBullhorn />
            break;
        case 1:
            icon = <FaSortAmountUp />
            break;
        case 2:
            icon = <IoIosPeople />
            break;
        case 3:
            icon = <IoMdReverseCamera />
            break
        default:
            icon = <IoMdReverseCamera />
    }

    return (
        <div className="col-lg-3 col-md-6 items md-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                {icon}
              </span>
              <h5>{title}</h5>
              <p>
                {content}
              </p>
              {/* <Link href="/services/brand-awareness">
                <a className="simple-btn mt-30">Read More</a>
              </Link> */}
              {service===4 ? <button className="nb butn bord curve mt-30" onClick={()=>setService(idx)}>
                Read More
              </button>:
                <button className="nb butn bord curve mt-30"
                    onClick={()=>setService(4)}
                >
                    Back
                </button>
              }
            </div>
          </div>
    )
}


export default ServiceIntro