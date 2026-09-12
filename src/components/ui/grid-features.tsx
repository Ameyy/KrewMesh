'use client';
import { Target, PenTool, Monitor, Code, Sparkles, Cloud } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { FeatureCard } from '@/components/ui/grid-feature-cards';

const features = [
	{
		title: 'Branding',
		icon: Target,
		description: 'Identity systems, logos, visual language and brand experiences.',
	},
	{
		title: 'Design',
		icon: PenTool,
		description: 'Graphic design, communication design and creative direction.',
	},
	{
		title: 'Digital',
		icon: Monitor,
		description: 'Websites, interfaces and immersive digital experiences.',
	},
	{
		title: 'Development',
		icon: Code,
		description: 'High performance websites, web applications and software.',
	},
	{
		title: 'AI',
		icon: Sparkles,
		description: 'AI-powered products, automation and intelligent experiences.',
	},
	{
		title: 'SaaS',
		icon: Cloud,
		description: 'Product strategy, UI/UX and scalable SaaS platforms.',
	},
];

export function GridFeatures() {
	return (
		<section className="py-16 md:py-32 section bg-background">
			<div className="mx-auto w-full max-w-6xl space-y-12 px-4">
				<AnimatedContainer className="max-w-3xl">
					<h2 className="text-4xl md:text-6xl font-bold tracking-tight uppercase">
						IDEAS INTO<br />EXPERIENCES.
					</h2>
				</AnimatedContainer>

				<AnimatedContainer
					delay={0.4}
					className="grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed border-white/20 divide-white/20 sm:grid-cols-2 md:grid-cols-3"
				>
					{features.map((feature, i) => (
						<FeatureCard key={i} feature={feature} />
					))}
				</AnimatedContainer>
			</div>
		</section>
	);
}

type ViewAnimationProps = {
	delay?: number;
	className?: React.ComponentProps<typeof motion.div>['className'];
	children: React.ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
