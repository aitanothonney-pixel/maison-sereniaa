'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface ImageGalleryProps {
	imageCount?: number;
	showViewMore?: boolean;
}

export function ImageGallery({ imageCount = 30, showViewMore = false }: ImageGalleryProps) {
	const totalImages = imageCount;
	const imagesPerCol = Math.ceil(totalImages / 3);

	return (
		<div className="relative w-full flex flex-col items-center py-10 px-4">
			<div className="mx-auto grid w-full max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{Array.from({ length: 3 }).map((_, col) => (
					<div key={col} className="grid gap-6">
						{Array.from({ length: imagesPerCol }).map((_, index) => {
							const globalIndex = col * imagesPerCol + index;
							if (globalIndex >= totalImages) return null;

							const isPortrait = Math.random() > 0.5;
							const width = isPortrait ? 1080 : 1920;
							const height = isPortrait ? 1920 : 1080;
							const ratio = isPortrait ? 9 / 16 : 16 / 9;

							return (
								<AnimatedImage
									key={`${col}-${index}`}
									alt={`Image ${globalIndex}`}
									src={`https://picsum.photos/seed/${col}-${index}/${width}/${height}`}
									ratio={ratio}
									placeholder={`https://placehold.co/${width}x${height}/`}
								/>
							);
						})}
					</div>
				))}
			</div>

			{showViewMore && (
				<div className="mt-12 text-center">
					<a
						href="/gallery"
						className="inline-block px-8 py-4 border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors ui-label font-bold tracking-widest"
					>
						VOIR NOTRE GALERIE COMPLÈTE
					</a>
				</div>
			)}
		</div>
	);
}

interface AnimatedImageProps {
	alt: string;
	src: string;
	className?: string;
	placeholder?: string;
	ratio: number;
}

function AnimatedImage({ alt, src, ratio, placeholder }: AnimatedImageProps) {
	const ref = React.useRef(null);
	const isInView = useInView(ref, { once: true });
	const [isLoading, setIsLoading] = React.useState(true);

	const [imgSrc, setImgSrc] = React.useState(src);

	const handleError = () => {
		if (placeholder) {
			setImgSrc(placeholder);
		}
	};

	return (
		<AspectRatio
			ref={ref}
			ratio={ratio}
			className="bg-surface relative size-full border-0"
		>
			<img
				alt={alt}
				src={imgSrc}
				className={cn(
					'size-full object-cover opacity-0 transition-opacity duration-1000 ease-in-out',
					{
						'opacity-100': isInView && !isLoading,
					},
				)}
				onLoad={() => setIsLoading(false)}
				loading="lazy"
				onError={handleError}
			/>
		</AspectRatio>
	);
}
