import { lazy, Suspense } from 'react';
import Loading from './Loading';

const LazyInputArea = lazy(() => import('./InputArea'));
const LazyOutputArea = lazy(() => import('./OutputArea'));

const Layout = () => {
	return (
		<div className="grid grid-cols-2 h-screen">
			<Suspense fallback={<Loading />}>
				<div className="h-full overflow-y-auto">
					<LazyInputArea />
				</div>
			</Suspense>
			<Suspense fallback={<Loading />}>
				<div className="h-full overflow-y-auto">
					<LazyOutputArea />
				</div>
			</Suspense>
		</div>
	);
};

export default Layout;
