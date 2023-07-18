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
    Avatar,
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
            {/* <Card className="w-full mx-auto max-w-[26rem] shadow-lg mb-4">
                <CardHeader floated={false} color="blue-gray">
                    <div className="mx-0 flex items-center gap-4 pt-0 pb-8">
                        <Avatar
                            size="lg"
                            variant="circular"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                            alt="tania andrew"
                        />
                        <div className="flex w-full flex-col gap-0.5">
                            <div className="flex items-center justify-between">
                                <Typography variant="h5" color="blue-gray">
                                    Tania Andrew
                                </Typography>
                                <div className="5 flex items-center gap-0">
                                    <StarIcon />
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                </div>
                            </div>
                            <Typography color="blue-gray">Frontend Lead @ Google</Typography>
                        </div>
                    </div>
                    <img
                        src={image_url}
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
                            <>{details.slice(0, 250)} ... <Link to={`/news/${_id}`}>Read More</Link></>}
                    </Typography>
                </CardBody>
            </Card> */}
            <Card className="w-full mx-auto mb-5 max-w-[26rem] shadow-lg">
                <CardHeader floated={false}>
                    <div className="mx-0 flex items-center gap-4 pt-1 px-2">
                        <Avatar
                            size="lg"
                            variant="circular"
                            src={author.img}
                            alt="tania andrew"
                        />
                        <div className="flex w-full flex-col gap-0.5">
                            <div className="flex items-center justify-between">
                                <Typography variant="h5">
                                   {author.name}
                                </Typography>
                                <div className="5 flex items-center gap-0">
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                    <StarIcon className="h-5 w-5 text-yellow-700" />
                                </div>
                            </div>
                            <Typography>{author.published_date}</Typography>
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