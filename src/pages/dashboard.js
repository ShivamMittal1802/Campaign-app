import React, {useState} from 'react';
import styles from "./dashboard.module.css";

const Dashboard = () => {


  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      campaignName: 'Bluberry cake Campaign',
      image: '/campaign1-image.jpg',
      isOn: true,
      dateRange: '25 Jul 2020 - 01 Aug 2020',
      clicks: 300,
      platform: 'FB',
      status: 'Live now',
    },
    {
      id: 2,
      campaignName: 'Chocolate cake campaign',
      image: '/campaign2-image.jpg',
      isOn: false,
      dateRange: '10 Jul 2020 - 20 Jul 2020',
      clicks: 210,
      platform: 'Insta',
      status: 'Paused',
    },
    // Add more campaign objects here
    {
      id: 3,
      campaignName: 'Your New Campaign',
      image: '/campaign3-image.jpg',
      isOn: true,
      dateRange: '01 Nov 2023 - 15 Nov 2023',
      clicks: 500,
      platform: 'YT',
      status: 'Live now',
    },
    {
      id: 4,
      campaignName: 'Another Example Campaign',
      image: '/campaign4-image.jpg',
      isOn: true,
      dateRange: '15 Dec 2023 - 31 Dec 2023',
      clicks: 450,
      platform: 'FB',
      status: 'Live now',
    },
    {
      id: 5,
      campaignName: 'adfasdfadf',
      image: '/campaign4-image.jpg',
      isOn: true,
      dateRange: '15 Dec 2023 - 31 Dec 2023',
      clicks: 4503,
      platform: 'instagram',
      status: 'Live now',
    },
  ]);


  const [filter, setFilter] = useState('all'); // Added state for filter
  const [search, setSearch] = useState(''); // Added state for search input

  const filteredCampaigns = campaigns.filter((campaign) => {
    if (filter === 'all') return true;
    return campaign.platform.toLowerCase() === filter;
  });

  const handleFilter = (platform) => {
    setFilter(platform);
  };

  const handleCreateCampaign = () => {
    // Add your routing logic to the "what-you-want-to-do" page here
  };

  const handleDeleteCampaign = (id) => {
    const updatedCampaigns = campaigns.filter((campaign) => campaign.id !== id);
    setCampaigns(updatedCampaigns);
  };

  const handleEditCampaign = (id) => {
    // Add your edit campaign logic here
  };

  return (
    <div className={styles.dashboard}>
      <b className={styles.scube}>Scube</b>
      <div className={styles.dashboardChild} />
      <img className={styles.frameIcon} alt="" src="/frame.svg" />
      <div className={styles.dashboardItem} />
      <div className={styles.groupParent}>
        <div className={styles.mukundCakeShopParent}>
          <div className={styles.mukundCakeShop}>Mukund cake shop</div>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        </div>
        <img className={styles.groupChild} alt="" src="/group-5886.svg" />
      </div>
      <img className={styles.dashboardInner} alt="" src="/group-16633.svg" />
      <img
        className={styles.vuesaxlinearnotificationIcon}
        alt=""
        src="/vuesaxlinearnotification1.svg"
      />
      <b className={styles.yourCampaigns}>Your Campaigns</b>
      <div
        className={styles.checkTheList}
      >{`Check the list of campigns you created `}</div>
      <div className={styles.homeParent}>
        <div className={styles.home}>Home</div>
        <img
          className={styles.vuesaxlinearhouseIcon}
          alt=""
          src="/vuesaxlinearhouse.svg"
        />
        <div className={styles.productsParent}>
          <div className={styles.products}>Products</div>
          <img
            className={styles.vuesaxoutlinebagIcon}
            alt=""
            src="/vuesaxoutlinebag1.svg"
          />
        </div>
        <div className={styles.customersParent}>
          <div className={styles.customers}>Customers</div>
          <img
            className={styles.vuesaxoutlineprofile2userIcon}
            alt=""
            src="/vuesaxoutlineprofile2user1.svg"
          />
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.groupItem} />
          <div className={styles.groupInner} />
          <div className={styles.campaignParent}>
            <div className={styles.campaign}>Campaign</div>
            <img
              className={styles.vuesaxboldvolumeHighIcon}
              alt=""
              src="/vuesaxboldvolumehigh.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.filterButtons}>
        <button onClick={() => handleFilter('all')}>All</button>
        <button onClick={() => handleFilter('yt')}>YT</button>
        <button onClick={() => handleFilter('fb')}>FB</button>
        <button onClick={() => handleFilter('insta')}>Insta</button>
        <button onClick={() => handleFilter('sad')}>Sad</button>
      </div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className={styles.groupContainer}>
        {filteredCampaigns.map((campaign) => (
          <div key={campaign.id} className={styles.campaignContainer}>
            <div className={styles.campaign}>{campaign.campaignName}</div>
            <div className={styles.onoff}>
              <button onClick={() => handleEditCampaign(campaign.id)}>Edit</button>
              <button onClick={() => handleDeleteCampaign(campaign.id)}>Delete</button>
            </div>
            <div className={styles.dateRange}>{campaign.dateRange}</div>
            <div className={styles.clicks}>{campaign.clicks}</div>
            <div className={styles.platform}>{campaign.platform}</div>
            <div className={styles.status}>{campaign.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
