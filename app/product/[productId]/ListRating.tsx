'use client';
import moment from 'moment';
import { Rating } from '@mui/material';
import Avatar from '@/app/components/Avatar';
import Heading from "@/app/components/Heading";

interface ListRatingProps {
	product: any;
}

const ListRating: React.FC<ListRatingProps> = ({ product }) => {
	return (
		<div>
			<Heading title='Product Reviews' customColor='text-gray-100 uppercase' />
			<div className='text-sm mt-2'>
				{product.reviews &&
					product.reviews.map((review: any) => {
						return (
							<div key={review.id} className='max-w-[500px]'>
								<div className='flex flex-row justify-between items-center mb-4'>
									<div className='flex gap-3 items-center'>
										<div className='avatarBoxshadow'>
											<Avatar src={review.user.images} color='#00ED64' />
										</div>
										<div className='flex flex-col'>
											<div className='font-bold text-lg'>
												{review?.user.name}
											</div>
											<div>
												<Rating
													className='flex gap-[3px]'
													value={review?.rating}
													readOnly
													size='large'
												/>
											</div>
										</div>
									</div>

									<div className='font-bold text-xs text-slate-400 '>
										{moment(review?.createdDate).fromNow()}
									</div>
								</div>
								<div className='ml-1 text-base'>{review?.comment}</div>
								<hr className='mt-4 mb-4 border-slate-700' />
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default ListRating;
