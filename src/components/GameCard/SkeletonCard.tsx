import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"
import CardContainer from "./CardContainer"

const SkeletonCard = () => {
    return (
        <Card>
            <Skeleton height='200px' />
            <CardBody>
                <SkeletonText />
            </CardBody>
        </Card>
    )
}

export default SkeletonCard