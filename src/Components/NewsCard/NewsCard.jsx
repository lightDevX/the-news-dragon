import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';

const NewsCard = ({ news }) => {
    const { _id, title, author, image_url, details, rating } = news;

    return (
        <>
            <Card className="w-full mx-auto mb-5 mt-2 shadow-lg">
                <CardHeader floated={false}>
                    <div className="mx-0 flex items-center gap-4 pt-1 px-2">
                        <Avatar
                            size="lg"
                            variant="circular"
                            src={author?.img}
                            alt="tania andrew"
                        />
                        <div className="flex w-full flex-col gap-0.5">
                            <div className="flex items-center justify-between bg-white
                            ">
                                <Typography variant="h5">
                                    {author?.name}
                                </Typography>
                                <div className="5 flex items-center gap-0">
                                    <Rating
                                        placeholderRating={rating.number}
                                        readonly
                                        emptySymbol={<FaRegStar className="h-5 w-5 text-yellow-700"></FaRegStar>}
                                        placeholderSymbol={<FaStar className="h-5 w-5 text-yellow-700"></FaStar>}
                                        fullSymbol={<FaStar></FaStar>}
                                    />
                                </div>
                            </div>
                            <Typography>{author?.published_date}</Typography>
                        </div>
                    </div>
                    <img
                        src={image_url}
                        alt="ui/ux review check"
                        className='pt-3'
                    />
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                </CardHeader>
                <CardBody>
                    <div className="mb-3 flex items-center justify-between">
                        <Typography variant="h5" color="blue-gray" className="font-medium">
                            {title}
                        </Typography>
                    </div>
                    <Typography color="gray">
                        {details.length < 250 ? <>{details}</> :
                            <>{details.slice(0, 250)} ...<p className=' text-cyan-300'><Link to={`/news/${_id}`}>Read More</Link></p></>}
                    </Typography>
                </CardBody>
            </Card>
        </>
    );
};

export default NewsCard;