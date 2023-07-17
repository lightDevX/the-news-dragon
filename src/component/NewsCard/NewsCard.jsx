import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Tooltip,
    IconButton,
} from "@material-tailwind/react";
import {
    BanknotesIcon,
    StarIcon,
    HeartIcon,
    WifiIcon,
    HomeIcon,
    TvIcon,
    FireIcon,
} from "@heroicons/react/24/solid";
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { _id, title, author, published_date, image_url, details } = news;

    return (
        <>
            <Card className="w-full mx-auto max-w-[26rem] shadow-lg mb-4">
                <CardHeader floated={false} color="blue-gray">
                    <img
                        src={image_url}
                    />
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                    <IconButton
                        size="sm"
                        color="red"
                        variant="text"
                        className="!absolute top-4 right-4 rounded-full"
                    >
                        <HeartIcon className="h-6 w-6" />
                    </IconButton>
                </CardHeader>
                <CardBody>
                    <div className="mb-3 flex items-center justify-between">
                        <Typography variant="h5" color="blue-gray" className="font-medium">
                            {title}
                        </Typography>
                        <Typography
                            color="blue-gray"
                            className="flex items-center gap-1.5 font-normal"
                        >
                            <StarIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
                            5.0
                        </Typography>
                    </div>
                    <Typography color="gray">
                        {details.length < 250 ? <>{details}</> :
                            <>{details.slice(0, 250)} ... <Link to={`/news/${_id}`}>Read More</Link></>}
                    </Typography>
                    <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                        <Tooltip content="$129 per night">
                            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                                <BanknotesIcon className="h-5 w-5" />
                            </span>
                        </Tooltip>
                        <Tooltip content="Free wifi">
                            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                                <WifiIcon className="h-5 w-5" />
                            </span>
                        </Tooltip>
                        <Tooltip content="2 bedrooms">
                            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                                <HomeIcon className="h-5 w-5" />
                            </span>
                        </Tooltip>
                        <Tooltip content={`65" HDTV`}>
                            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                                <TvIcon className="h-5 w-5" />
                            </span>
                        </Tooltip>
                        <Tooltip content="Fire alert">
                            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                                <FireIcon className="h-5 w-5" />
                            </span>
                        </Tooltip>
                        <Tooltip content="And +20 more">
                            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                                +20
                            </span>
                        </Tooltip>
                    </div>
                </CardBody>
                <CardFooter className="pt-3">
                    <Button size="lg" fullWidth={true}>
                        Reserve
                    </Button>
                </CardFooter>
            </Card>
        </>
    );
};

export default NewsCard;