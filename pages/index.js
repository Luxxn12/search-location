import BusinessList from "../components/BusinessList";
import CategoryList from "../components/CategoryList";
import SearchBar from "../components/SearchBar";
import SideNavBar from "../components/SideNavBar";

export default function Home() {
  return (
    <>
      <div className="flex">
        <SideNavBar />
        <div className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-10 w-full mt-10 gap-8">
          <div>
            {/* Search Bar */}
            <SearchBar />
            {/* Categories list  */}
            <CategoryList />
            {/* Business List */}
            <BusinessList />
          </div>

          {/* Google Map */}
          <div>Google Map</div>
        </div>
      </div>
    </>
  );
}
