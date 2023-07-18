import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const News = () => {

    const news = useLoaderData();
    const { _id, title, author, image_url, details, rating } = news;

    return (
        <Card className="w-full">
            <CardHeader color="blue-gray" className="relative h-full mt-10">
                <img src={image_url} alt="img-blur-shadow" layout="fill" />
            </CardHeader>
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    {title}
                </Typography>
                <Typography>
                    {details}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Button>Read More</Button>
            </CardFooter>
        </Card>
    );
};

export default News;