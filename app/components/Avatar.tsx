import Image from 'next/image';
import { ImUser } from 'react-icons/im';

interface AvatarProps {
	src?: string | null | undefined;
	color?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, color }) => {
	if (src) {
		return (
			<Image
				src={src}
				alt='Avatar'
				className='rounded-full border-2 border-[#00ED64]'
				height='65'
				width='65'
			/>
		);
	}
	return (
		<ImUser
			size={50}
			color={color}
			className='p-[7px] pt-[3px] '
		/>
	);
};

export default Avatar;
