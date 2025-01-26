import {Offcanvas} from "react-bootstrap";
import "../../styles/offcanvas.scss"

export interface IPortfolioImageProps {
}

export interface IPortfolioOffcanvasProps {
    title: string;
    description: string;
    image: string

    show: boolean;
    handleClose: () => void;
}

export function PortfolioOffcanvas(props: IPortfolioOffcanvasProps) {
    return <Offcanvas style={{width: "40vw", padding: 0}} show={props.show} onHide={props.handleClose}>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>{props.title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className={"portfolio_description"}>
            <img src={props.image} alt=""/>
            <p>
                {props.description}
            </p>
        </Offcanvas.Body>
    </Offcanvas>
}