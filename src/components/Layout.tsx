import { lazy, Suspense } from 'react';
import Loading from './Loading';

const LazyInputArea = lazy(() => import('./InputArea'));
const LazyOutputArea = lazy(() => import('./OutputArea'));

const Layout = () => {
	return (
		<div className="container">
			<div className="row">
				<Suspense fallback={<Loading />}>
					<LazyInputArea />
				</Suspense>
				<Suspense fallback={<Loading />}>
					<LazyOutputArea />
				</Suspense>
			</div>
		</div>
	);
};

export default Layout;
