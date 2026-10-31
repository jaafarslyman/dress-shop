import { type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import { AnimatePresence, motion } from 'framer-motion';
import { Shell } from '@/components/SiteShell';
import { HomePage, CollectionPage, DressPage, WishlistPage, AppointmentsPage, ReservationPage, AboutPage, ContactPage, AccountPage, NotFoundPage } from '@/pages/Pages';

const queryClient = new QueryClient();
function Router(){
  const [location]=useLocation();
  return <Shell><RoutedErrorBoundary><AnimatePresence mode="wait" initial={false}><motion.div key={location} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-4}} transition={{duration:.22}}><Switch>
    <Route path="/" component={HomePage}/>
    <Route path="/collection" component={CollectionPage}/>
    <Route path="/dress/:id" component={DressPage}/>
    <Route path="/wishlist" component={WishlistPage}/>
    <Route path="/appointments" component={AppointmentsPage}/>
    <Route path="/reservation" component={ReservationPage}/>
    <Route path="/reservation/:dressId" component={ReservationPage}/>
    <Route path="/about" component={AboutPage}/>
    <Route path="/contact" component={ContactPage}/>
    <Route path="/account" component={AccountPage}/>
    <Route component={NotFoundPage}/>
  </Switch></motion.div></AnimatePresence></RoutedErrorBoundary></Shell>;
}
function RoutedErrorBoundary({children}:{children:ReactNode}){const [location]=useLocation();return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;}
function App(){return <QueryClientProvider client={queryClient}><TooltipProvider><WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/,'')}><Router/></WouterRouter><Toaster/></TooltipProvider></QueryClientProvider>;}
export default App;
