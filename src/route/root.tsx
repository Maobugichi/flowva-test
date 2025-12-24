import { Outlet } from "react-router-dom"
import { SideNav } from "../components/layout/sideNav"
import { PointsProvider } from "../context/pointsContext"

const Root = () => {
    return(
        <section>
            <div className="flex flex-col md:flex-row min-h-dvh lg:h-screen lg:md:overflow-hidden w-full">
                <SideNav/>
                <main className="w-full bg-gray-50 px-4 lg:px-8 lg:pt-8 min-h-screen grow md:overflow-y-auto box-border lg:min-h-0">
                    <PointsProvider>
                      <Outlet/>
                    </PointsProvider>
                </main>
            </div>
        </section>
    )
}

export default Root