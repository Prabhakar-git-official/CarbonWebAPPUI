import { Card } from "reactstrap";

const CustomCard = ({ title, text, subText }) => {
    return (
        <Card className="custom-card p-24">
            <small className="text-site-primary font-weight-semi-bold text-uppercase">{title}</small>
            <div className="d-flex mt-5 align-items-baseline">
                <h3 className="font-weight-bold">{text}</h3>
            </div>
            <p className="text-muted mb-0 pr-3">{subText}</p>
        </Card>
    );
}

export default CustomCard;