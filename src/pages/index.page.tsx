import Card, {CardVariant} from "../components/card/card";
import {FC} from "react";

const Index: FC = () => {
    return (
        <div>
            <Card onClick={() => console.log('click')} width={'200px'} height={'300px'} variant={CardVariant.outlined}>
                <button>Кнопка</button>
            </Card>
        </div>
    )
}

export default Index;