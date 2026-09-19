import React, { Component } from "react";

const CATEGORIES = [
  "General",
  "Business",
  "Sports",
  "Technology",
  "Entertainment",
  "Science",
  "Health",
];

const CATEGORY_ICONS = {
  General: "◈",
  Business: "◆",
  Sports: "◉",
  Technology: "◎",
  Entertainment: "◐",
  Science: "◑",
  Health: "◒",
};

const CATEGORY_COLORS = {
  General: { accent: "#e8c547", bg: "#1a1a0e" },
  Business: { accent: "#47e8a0", bg: "#0e1a14" },
  Sports: { accent: "#e84747", bg: "#1a0e0e" },
  Technology: { accent: "#4791e8", bg: "#0e1118" },
  Entertainment: { accent: "#e847d4", bg: "#1a0e18" },
  Science: { accent: "#47d4e8", bg: "#0e181a" },
  Health: { accent: "#a0e847", bg: "#121a0e" },
};

const ARTICLES_PER_PAGE = 6;

const NEWS_DATA = {
  General: [
    {
      title: "Global Leaders Meet to Discuss Economy, Technology and Future Cooperation",
      description:
        "World leaders gathered for discussions covering economic development, technology, climate cooperation and international partnerships. Officials highlighted the importance of collaboration as countries respond to rapidly changing global conditions.",
      source: "PulseWire",
      publishedAt: "2026-04-13T10:30:00Z",
      imageKeyword: "global",
      author: "Alex Morgan",
      url: "#",
    },
    {
      title: "Cities Introduce New Digital Services to Improve Everyday Public Access",
      description:
        "Several cities are expanding digital public services to make applications, information and citizen support easier to access. The projects combine mobile platforms with improved online infrastructure.",
      source: "Daily Report",
      publishedAt: "2026-04-13T09:45:00Z",
      imageKeyword: "city",
      author: "Sarah Wilson",
      url: "#",
    },
    {
      title: "New Research Highlights Rapid Changes Across Major Global Industries",
      description:
        "Researchers have identified significant changes across several major industries. The report examines technology adoption, changing consumer behaviour and new approaches to improving productivity.",
      source: "World Journal",
      publishedAt: "2026-04-13T08:40:00Z",
      imageKeyword: "research",
      author: "Daniel Lee",
      url: "#",
    },
    {
      title: "Education Systems Explore New Ways to Prepare Students for Future Jobs",
      description:
        "Educational institutions are introducing new programs focused on digital skills, communication and practical learning. Teachers and industry experts say these skills could become increasingly important for future careers.",
      source: "Education Today",
      publishedAt: "2026-04-13T07:35:00Z",
      imageKeyword: "education",
      author: "Emma Davis",
      url: "#",
    },
    {
      title: "Public Transport Networks Begin Testing Smarter Passenger Information Systems",
      description:
        "Transport authorities are testing digital information systems designed to provide passengers with faster updates. The systems can display route changes, service alerts and estimated arrival information.",
      source: "Metro News",
      publishedAt: "2026-04-13T06:50:00Z",
      imageKeyword: "transport",
      author: "Ryan Cooper",
      url: "#",
    },
    {
      title: "Businesses Adapt Strategies as Consumer Expectations Continue to Change",
      description:
        "Companies are adjusting their strategies as customers increasingly expect faster services and better digital experiences. Businesses are investing in technology while also focusing on customer support.",
      source: "Market Daily",
      publishedAt: "2026-04-13T05:40:00Z",
      imageKeyword: "business",
      author: "Michael Brown",
      url: "#",
    },
  ],

  Business: [
    {
      title: "Technology Companies Announce New Plans for Expanding Digital Services",
      description:
        "Several technology companies announced plans to expand their digital services. The projects focus on cloud platforms, artificial intelligence and tools designed for business customers.",
      source: "Business Daily",
      publishedAt: "2026-04-13T10:20:00Z",
      imageKeyword: "business",
      author: "James Carter",
      url: "#",
    },
    {
      title: "Markets Respond to Fresh Economic Data Released During Morning Trading",
      description:
        "Financial markets responded to new economic data released during morning trading. Investors are closely watching inflation, employment and business activity indicators.",
      source: "Market Watch",
      publishedAt: "2026-04-13T09:10:00Z",
      imageKeyword: "market",
      author: "Olivia Smith",
      url: "#",
    },
    {
      title: "Startups Raise Fresh Funding to Develop Next Generation Digital Products",
      description:
        "A group of startups has secured new funding to develop products across software, artificial intelligence and financial technology. The companies plan to expand their teams and services.",
      source: "Startup News",
      publishedAt: "2026-04-13T08:30:00Z",
      imageKeyword: "startup",
      author: "Noah Martin",
      url: "#",
    },
    {
      title: "Retail Companies Invest More in Online Shopping and Delivery Technology",
      description:
        "Retail businesses are increasing investments in online shopping platforms and delivery systems. Companies are looking for ways to improve convenience and reduce delivery times.",
      source: "Retail Times",
      publishedAt: "2026-04-13T07:25:00Z",
      imageKeyword: "retail",
      author: "Sophia Green",
      url: "#",
    },
    {
      title: "Small Businesses Adopt Cloud Tools to Simplify Everyday Operations",
      description:
        "Small businesses are increasingly using cloud-based tools for accounting, communication and customer management. The services allow teams to work with shared information from different locations.",
      source: "Business Post",
      publishedAt: "2026-04-13T06:30:00Z",
      imageKeyword: "office",
      author: "Lucas Adams",
      url: "#",
    },
    {
      title: "Global Companies Increase Focus on Sustainable Business Practices",
      description:
        "Large companies are increasing their focus on sustainability and resource efficiency. New initiatives include cleaner operations, improved supply chains and investments in renewable energy.",
      source: "Green Business",
      publishedAt: "2026-04-13T05:30:00Z",
      imageKeyword: "company",
      author: "Mia Johnson",
      url: "#",
    },
  ],

  Sports: [
    {
      title: "Top Teams Prepare for Important Matches as Competition Intensifies",
      description:
        "Teams are preparing for important matches as the sporting season enters a busy period. Coaches are focusing on fitness, tactics and squad rotation.",
      source: "Sports Desk",
      publishedAt: "2026-04-13T10:10:00Z",
      imageKeyword: "stadium",
      author: "Chris Evans",
      url: "#",
    },
    {
      title: "Young Players Attract Attention With Strong Performances This Season",
      description:
        "Several young players have attracted attention after impressive performances. Coaches and analysts are watching their development as the season continues.",
      source: "Sport Daily",
      publishedAt: "2026-04-13T09:00:00Z",
      imageKeyword: "football",
      author: "Mark Wilson",
      url: "#",
    },
    {
      title: "Major Tournament Organizers Announce Updated Competition Schedule",
      description:
        "Tournament organizers have announced an updated schedule covering upcoming fixtures and events. Fans will receive additional information about venues and match timings.",
      source: "Arena News",
      publishedAt: "2026-04-13T08:15:00Z",
      imageKeyword: "tournament",
      author: "Adam Scott",
      url: "#",
    },
    {
      title: "Training Technology Gives Athletes New Tools to Track Performance",
      description:
        "Sports teams are using new technology to monitor training and performance. Sensors and analytics platforms provide coaches with additional information about athlete workloads.",
      source: "Sports Tech",
      publishedAt: "2026-04-13T07:20:00Z",
      imageKeyword: "training",
      author: "Ryan Hall",
      url: "#",
    },
    {
      title: "Fans Return to Stadiums as New Season Brings Fresh Sporting Excitement",
      description:
        "Fans are returning to stadiums for a new season of major sporting events. Clubs are preparing new experiences and digital services for supporters.",
      source: "Fan Report",
      publishedAt: "2026-04-13T06:20:00Z",
      imageKeyword: "fans",
      author: "Ben Taylor",
      url: "#",
    },
    {
      title: "International Athletes Prepare for Major Events Later This Year",
      description:
        "International athletes are beginning preparations for major events later this year. Training camps and qualification competitions are already underway in several sports.",
      source: "Global Sports",
      publishedAt: "2026-04-13T05:20:00Z",
      imageKeyword: "athlete",
      author: "Jack Miller",
      url: "#",
    },
  ],

  Technology: [
    {
      title: "Artificial Intelligence Tools Continue to Transform Modern Software Development",
      description:
        "Artificial intelligence tools are becoming increasingly common in software development. Developers are using them for coding assistance, testing, documentation and productivity improvements.",
      source: "TechCrunch",
      publishedAt: "2026-04-13T10:40:00Z",
      imageKeyword: "technology",
      author: "Ethan Clark",
      url: "#",
    },
    {
      title: "New Computing Platforms Focus on Faster and More Efficient Processing",
      description:
        "New computing platforms are being developed with a focus on speed and energy efficiency. Engineers are exploring new processor designs and software optimization techniques.",
      source: "Tech World",
      publishedAt: "2026-04-13T09:30:00Z",
      imageKeyword: "computer",
      author: "Daniel Moore",
      url: "#",
    },
    {
      title: "Developers Explore New Frameworks for Building Modern Web Applications",
      description:
        "Developers are exploring new tools and frameworks for building modern web applications. The latest platforms focus on performance, accessibility and easier development workflows.",
      source: "Developer News",
      publishedAt: "2026-04-13T08:25:00Z",
      imageKeyword: "coding",
      author: "Kevin Young",
      url: "#",
    },
    {
      title: "Cybersecurity Teams Warn Companies About Increasing Digital Security Challenges",
      description:
        "Cybersecurity teams continue to encourage organizations to improve their security practices. Experts recommend stronger authentication, regular updates and better monitoring of systems.",
      source: "Security Report",
      publishedAt: "2026-04-13T07:15:00Z",
      imageKeyword: "cybersecurity",
      author: "Robert King",
      url: "#",
    },
    {
      title: "Cloud Computing Services Add New Features for Developers and Businesses",
      description:
        "Cloud platforms are introducing new tools for developers and businesses. The features aim to simplify application deployment, data management and system monitoring.",
      source: "Cloud News",
      publishedAt: "2026-04-13T06:25:00Z",
      imageKeyword: "cloud",
      author: "William Adams",
      url: "#",
    },
    {
      title: "Smart Devices Become More Connected Through Faster Wireless Networks",
      description:
        "Smart devices are becoming increasingly connected through modern wireless networks. Manufacturers are developing products that can communicate more efficiently with cloud services.",
      source: "Digital Today",
      publishedAt: "2026-04-13T05:25:00Z",
      imageKeyword: "smartphone",
      author: "Henry Walker",
      url: "#",
    },
  ],

  Entertainment: [
    {
      title: "New Films and Streaming Shows Draw Attention From Global Audiences",
      description:
        "New films and streaming productions are attracting attention from audiences around the world. Studios are experimenting with different storytelling formats and digital release strategies.",
      source: "Entertainment Weekly",
      publishedAt: "2026-04-13T10:00:00Z",
      imageKeyword: "cinema",
      author: "Emma Wilson",
      url: "#",
    },
    {
      title: "Music Artists Announce New Projects Ahead of Upcoming Release Season",
      description:
        "Several music artists have announced new projects ahead of the upcoming release season. Fans are expecting new albums, collaborations and live performances.",
      source: "Music Daily",
      publishedAt: "2026-04-13T09:05:00Z",
      imageKeyword: "music",
      author: "Sophie Clark",
      url: "#",
    },
    {
      title: "Streaming Platforms Experiment With New Features for Viewers",
      description:
        "Streaming platforms are testing new features designed to improve the viewing experience. Companies are focusing on recommendations, discovery and interactive content.",
      source: "Screen News",
      publishedAt: "2026-04-13T08:20:00Z",
      imageKeyword: "streaming",
      author: "James Allen",
      url: "#",
    },
    {
      title: "Film Festivals Highlight Emerging Directors and Independent Productions",
      description:
        "Film festivals are showcasing productions from emerging directors and independent creators. Organizers say the events provide opportunities for new voices to reach wider audiences.",
      source: "Film Journal",
      publishedAt: "2026-04-13T07:10:00Z",
      imageKeyword: "film",
      author: "Liam Brown",
      url: "#",
    },
    {
      title: "Gaming Industry Prepares for New Releases Across Multiple Platforms",
      description:
        "Game developers are preparing several new releases across major platforms. Players are expecting new adventures, multiplayer experiences and technical improvements.",
      source: "Gaming Report",
      publishedAt: "2026-04-13T06:15:00Z",
      imageKeyword: "gaming",
      author: "Alex Turner",
      url: "#",
    },
    {
      title: "Creative Industry Adopts More Digital Tools for Modern Production",
      description:
        "Creative teams are adopting digital tools for editing, design and production. New software is helping creators collaborate and manage large projects more efficiently.",
      source: "Creative News",
      publishedAt: "2026-04-13T05:15:00Z",
      imageKeyword: "creative",
      author: "Mason Lee",
      url: "#",
    },
  ],

  Science: [
    {
      title: "Scientists Study New Data to Better Understand Changing Environmental Patterns",
      description:
        "Scientists are studying new datasets to understand environmental changes. Researchers are combining satellite observations with measurements collected from different regions.",
      source: "Science Daily",
      publishedAt: "2026-04-13T10:05:00Z",
      imageKeyword: "science",
      author: "Dr. Emily Stone",
      url: "#",
    },
    {
      title: "Researchers Develop New Methods for Studying Complex Biological Systems",
      description:
        "Researchers are developing new methods to study complex biological systems. The approaches could help scientists analyze large datasets and identify patterns more efficiently.",
      source: "Science Journal",
      publishedAt: "2026-04-13T09:15:00Z",
      imageKeyword: "laboratory",
      author: "Dr. Noah Reed",
      url: "#",
    },
    {
      title: "Space Researchers Continue Observations of Distant Objects in the Universe",
      description:
        "Space researchers continue observing distant objects using advanced instruments. New observations are helping scientists improve their understanding of stars and galaxies.",
      source: "Space News",
      publishedAt: "2026-04-13T08:10:00Z",
      imageKeyword: "space",
      author: "Laura Adams",
      url: "#",
    },
    {
      title: "New Laboratory Equipment Helps Researchers Conduct More Precise Experiments",
      description:
        "Research laboratories are adopting new equipment designed to improve measurement accuracy. Scientists say better instruments can support more detailed experiments.",
      source: "Research Weekly",
      publishedAt: "2026-04-13T07:05:00Z",
      imageKeyword: "laboratory",
      author: "Daniel White",
      url: "#",
    },
    {
      title: "Climate Researchers Release Updated Analysis of Long-Term Environmental Trends",
      description:
        "Climate researchers have published updated analysis of long-term environmental trends. The work examines temperature, rainfall and other measurements collected over many years.",
      source: "Climate Science",
      publishedAt: "2026-04-13T06:05:00Z",
      imageKeyword: "climate",
      author: "Rachel Green",
      url: "#",
    },
    {
      title: "Universities Expand Scientific Research Programs With New Collaborative Projects",
      description:
        "Universities are expanding scientific research programs through collaborations between different departments. The projects cover computing, biology, environmental science and engineering.",
      source: "Campus Science",
      publishedAt: "2026-04-13T05:05:00Z",
      imageKeyword: "research",
      author: "Thomas Hill",
      url: "#",
    },
  ],

  Health: [
    {
      title: "Health Researchers Examine New Approaches to Improving Preventive Care",
      description:
        "Health researchers are examining new approaches to preventive care. The studies focus on improving early detection, public awareness and access to useful health information.",
      source: "Health News",
      publishedAt: "2026-04-13T10:15:00Z",
      imageKeyword: "health",
      author: "Dr. Sarah Evans",
      url: "#",
    },
    {
      title: "Hospitals Adopt More Digital Tools to Improve Patient Services",
      description:
        "Hospitals are adopting digital tools to improve administrative and patient services. New systems can help staff manage appointments, records and communication.",
      source: "Medical Daily",
      publishedAt: "2026-04-13T09:20:00Z",
      imageKeyword: "hospital",
      author: "Dr. Michael Young",
      url: "#",
    },
    {
      title: "Researchers Continue Studying Technology's Role in Modern Healthcare",
      description:
        "Researchers are studying how technology can support healthcare services. Digital systems and data analysis are being explored for several healthcare applications.",
      source: "Health Tech",
      publishedAt: "2026-04-13T08:15:00Z",
      imageKeyword: "healthcare",
      author: "Dr. Anna Brown",
      url: "#",
    },
    {
      title: "Public Health Programs Expand Access to Reliable Health Information",
      description:
        "Public health programs are expanding access to reliable health information. Officials are using digital platforms and community programs to reach more people.",
      source: "Public Health",
      publishedAt: "2026-04-13T07:10:00Z",
      imageKeyword: "medical",
      author: "David Smith",
      url: "#",
    },
    {
      title: "Medical Researchers Share New Findings From Recent Clinical Studies",
      description:
        "Medical researchers have shared findings from recent studies. The research contributes additional information for scientists investigating different areas of healthcare.",
      source: "Medical Journal",
      publishedAt: "2026-04-13T06:10:00Z",
      imageKeyword: "research",
      author: "Dr. John Wilson",
      url: "#",
    },
    {
      title: "Healthcare Technology Companies Develop New Digital Patient Tools",
      description:
        "Healthcare technology companies are developing digital tools designed to support patients and healthcare professionals. The products focus on communication, scheduling and information management.",
      source: "Health Tech News",
      publishedAt: "2026-04-13T05:10:00Z",
      imageKeyword: "technology",
      author: "Maria Taylor",
      url: "#",
    },
  ],
};

class NewsItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hovered: false,
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    this.setState({ hovered: true });
  }

  handleMouseLeave() {
    this.setState({ hovered: false });
  }

  formatDate(dateStr) {
    const date = new Date(dateStr);
    const now = new Date("2026-04-13T12:00:00Z");

    const diffMs = now - date;
    const diffHrs = Math.floor(diffMs / 3600000);
    const diffMins = Math.floor(diffMs / 60000);

    if (diffMins < 60) {
      return `${diffMins}m ago`;
    }

    if (diffHrs < 24) {
      return `${diffHrs}h ago`;
    }

    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  }

  render() {
    const { article, accent, index } = this.props;
    const { hovered } = this.state;

    const imageUrl = `https://picsum.photos/seed/${encodeURIComponent(
      article.imageKeyword || article.title.slice(0, 10)
    )}/600/340`;

    return (
      <div
        className="news-card"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        style={{
          "--accent": accent,
          "--delay": `${index * 0.07}s`,
          transform: hovered ? "translateY(-6px)" : "translateY(0)",
          boxShadow: hovered
            ? `0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px ${accent}55`
            : "0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        <div className="card-image-wrap">
          <img
            src={imageUrl}
            alt={article.title}
            className="card-image"
          />

          <div className="card-image-overlay" />

          <span
            className="card-source"
            style={{ background: accent }}
          >
            {article.source}
          </span>
        </div>

        <div className="card-body">
          <div className="card-meta">
            <span className="card-author">
              {article.author || "Staff Reporter"}
            </span>

            <span className="card-time">
              {this.formatDate(article.publishedAt)}
            </span>
          </div>

          <h3 className="card-title">{article.title}</h3>

          <p className="card-desc">{article.description}</p>

          <a
            href={article.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
            style={{
              color: accent,
              borderColor: `${accent}44`,
            }}
          >
            Read Full Story
            <span className="link-arrow">→</span>
          </a>
        </div>

        <div
          className="card-accent-bar"
          style={{ background: accent }}
        />
      </div>
    );
  }
}

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: "",
      menuOpen: false,
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handleSearch(e) {
    this.setState({
      searchInput: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.onSearch(this.state.searchInput.trim());
  }

  toggleMenu() {
    this.setState((state) => ({
      menuOpen: !state.menuOpen,
    }));
  }

  render() {
    const {
      activeCategory,
      onCategoryChange,
      darkMode,
      onToggleDark,
    } = this.props;

    const { searchInput, menuOpen } = this.state;

    const accent =
      CATEGORY_COLORS[activeCategory]?.accent || "#e8c547";

    return (
      <nav
        className="navbar"
        style={{ "--nav-accent": accent }}
      >
        <div className="navbar-inner">
          <div className="navbar-brand">
            <span className="brand-icon">◈</span>

            <span className="brand-name">
              PULSE<em>WIRE</em>
            </span>
          </div>

          <div
            className={`navbar-cats ${
              menuOpen ? "open" : ""
            }`}
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`cat-btn ${
                  activeCategory === cat ? "active" : ""
                }`}
                onClick={() => {
                  onCategoryChange(cat);

                  this.setState({
                    menuOpen: false,
                  });
                }}
                style={
                  activeCategory === cat
                    ? {
                        color: accent,
                        borderBottomColor: accent,
                      }
                    : {}
                }
              >
                <span className="cat-icon">
                  {CATEGORY_ICONS[cat]}
                </span>

                <span className="cat-label">{cat}</span>
              </button>
            ))}
          </div>

          <div className="navbar-actions">
            <form
              onSubmit={this.handleSubmit}
              className="search-form"
            >
              <input
                type="text"
                className="search-input"
                placeholder="Search news..."
                value={searchInput}
                onChange={this.handleSearch}
              />

              <button
                type="submit"
                className="search-btn"
                style={{ background: accent }}
              >
                ⌕
              </button>
            </form>

            <button
              className="dark-toggle"
              onClick={onToggleDark}
              title="Toggle theme"
            >
              {darkMode ? "☀" : "☾"}
            </button>

            <button
              className="menu-toggle"
              onClick={this.toggleMenu}
            >
              {menuOpen ? "✕" : "≡"}
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

class Spinner extends Component {
  render() {
    const { accent } = this.props;

    return (
      <div className="spinner-wrap">
        <div className="spinner-orbit">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="spinner-dot"
              style={{
                background: accent,
                animationDelay: `${i * 0.15}s`,
              }}
            />
          ))}
        </div>

        <p
          className="spinner-text"
          style={{ color: accent }}
        >
          Fetching news...
        </p>
      </div>
    );
  }
}

class Pagination extends Component {
  render() {
    const {
      page,
      onPrev,
      onNext,
      accent,
      loading,
    } = this.props;

    return (
      <div className="pagination">
        <button
          className="page-btn"
          onClick={onPrev}
          disabled={page === 1 || loading}
          style={{ "--p-accent": accent }}
        >
          ← Previous
        </button>

        <span
          className="page-num"
          style={{ color: accent }}
        >
          Page {page}
        </span>

        <button
          className="page-btn"
          onClick={onNext}
          disabled={loading}
          style={{ "--p-accent": accent }}
        >
          Next →
        </button>
      </div>
    );
  }
}

class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      loading: true,
      error: null,
      page: 1,
    };

    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }

  componentDidMount() {
    this.loadNews();
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.category !== this.props.category ||
      prevProps.searchQuery !== this.props.searchQuery
    ) {
      this.setState(
        {
          page: 1,
          articles: [],
          error: null,
        },
        () => this.loadNews()
      );
    }
  }

  loadNews() {
    this.setState({
      loading: true,
      error: null,
    });

    setTimeout(() => {
      try {
        const {
          category,
          searchQuery,
        } = this.props;

        let articles = NEWS_DATA[category] || [];

        if (searchQuery) {
          const query = searchQuery.toLowerCase();

          articles = articles.filter(
            (article) =>
              article.title
                .toLowerCase()
                .includes(query) ||
              article.description
                .toLowerCase()
                .includes(query)
          );
        }

        this.setState({
          articles: articles.slice(0, ARTICLES_PER_PAGE),
          loading: false,
        });
      } catch (error) {
        this.setState({
          loading: false,
          error: "Failed to load news.",
        });
      }
    }, 700);
  }

  handleNext() {
    this.setState(
      (state) => ({
        page: state.page + 1,
        articles: [],
      }),
      () => this.loadNews()
    );
  }

  handlePrev() {
    if (this.state.page <= 1) {
      return;
    }

    this.setState(
      (state) => ({
        page: state.page - 1,
        articles: [],
      }),
      () => this.loadNews()
    );
  }

  render() {
    const {
      articles,
      loading,
      error,
      page,
    } = this.state;

    const {
      category,
      searchQuery,
    } = this.props;

    const colors =
      CATEGORY_COLORS[category] ||
      CATEGORY_COLORS.General;

    return (
      <main
        className="news-main"
        style={{ "--cat-bg": colors.bg }}
      >
        <div className="section-header">
          <h2
            className="section-title"
            style={{ color: colors.accent }}
          >
            <span className="section-icon">
              {CATEGORY_ICONS[category]}
            </span>

            {searchQuery
              ? `Results for "${searchQuery}"`
              : category}
          </h2>

          <p className="section-sub">
            {searchQuery
              ? `Showing ${category} articles matching your search`
              : `Live ${category.toLowerCase()} coverage · Updated just now`}
          </p>
        </div>

        {loading && <Spinner accent={colors.accent} />}

        {error && (
          <div
            className="error-box"
            style={{ borderColor: colors.accent }}
          >
            <span className="error-icon">⚠</span>

            <div>
              <strong>Failed to load news</strong>

              <p>{error}</p>

              <button
                className="retry-btn"
                style={{
                  background: colors.accent,
                }}
                onClick={() => this.loadNews()}
              >
                Try Again
              </button>
            </div>
          </div>
        )}

        {!loading && !error && articles.length === 0 && (
          <div className="no-results">
            No news articles found.
          </div>
        )}

        {!loading && !error && articles.length > 0 && (
          <>
            <div className="news-grid">
              {articles.map((article, index) => (
                <NewsItem
                  key={`${article.title}-${index}`}
                  article={article}
                  accent={colors.accent}
                  index={index}
                />
              ))}
            </div>

            <Pagination
              page={page}
              onPrev={this.handlePrev}
              onNext={this.handleNext}
              accent={colors.accent}
              loading={loading}
            />
          </>
        )}
      </main>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeCategory: "General",
      searchQuery: "",
      darkMode: true,
    };

    this.handleCategoryChange =
      this.handleCategoryChange.bind(this);

    this.handleSearch =
      this.handleSearch.bind(this);

    this.handleToggleDark =
      this.handleToggleDark.bind(this);
  }

  handleCategoryChange(category) {
    this.setState({
      activeCategory: category,
      searchQuery: "",
    });
  }

  handleSearch(query) {
    this.setState({
      searchQuery: query,
    });
  }

  handleToggleDark() {
    this.setState((state) => ({
      darkMode: !state.darkMode,
    }));
  }

  render() {
    const {
      activeCategory,
      searchQuery,
      darkMode,
    } = this.state;

    const colors =
      CATEGORY_COLORS[activeCategory] ||
      CATEGORY_COLORS.General;

    return (
      <div
        className={`app-root ${
          darkMode ? "dark" : "light"
        }`}
        style={{
          "--accent": colors.accent,
          "--cat-bg": colors.bg,
        }}
      >
        <style>{STYLES}</style>

        <Navbar
          activeCategory={activeCategory}
          onCategoryChange={this.handleCategoryChange}
          onSearch={this.handleSearch}
          darkMode={darkMode}
          onToggleDark={this.handleToggleDark}
        />

        <News
          category={activeCategory}
          searchQuery={searchQuery}
          key={`${activeCategory}-${searchQuery}`}
        />

        <footer className="footer">
          <span>
            ◈ PULSEWIRE · Powered by AI · 2026
          </span>
        </footer>
      </div>
    );
  }
}

const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@300;400;500&display=swap');

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: #0d0d0d;
}

.app-root {
  min-height: 100vh;
  font-family: 'IBM Plex Sans', sans-serif;
  transition: background 0.4s, color 0.4s;
}

.app-root.dark {
  --bg: #0d0d0d;
  --surface: #141414;
  --surface2: #1c1c1c;
  --border: #2a2a2a;
  --text: #e8e8e8;
  --text2: #888;
  --nav-bg: rgba(10,10,10,0.92);
  background: var(--bg);
  color: var(--text);
}

.app-root.light {
  --bg: #f4f2ec;
  --surface: #ffffff;
  --surface2: #efefef;
  --border: #ddd;
  --text: #111;
  --text2: #666;
  --nav-bg: rgba(244,242,236,0.95);
  background: var(--bg);
  color: var(--text);
}

.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--nav-bg);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
}

.navbar-inner {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  height: 64px;
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.brand-icon {
  font-size: 22px;
  color: var(--nav-accent);
  animation: spin 8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.brand-name {
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  font-weight: 900;
  color: var(--text);
}

.brand-name em {
  font-style: italic;
  color: var(--nav-accent);
}

.navbar-cats {
  display: flex;
  align-items: center;
  gap: 2px;
  overflow-x: auto;
  flex: 1;
  scrollbar-width: none;
}

.navbar-cats::-webkit-scrollbar {
  display: none;
}

.cat-btn {
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  padding: 6px 10px 4px;
  cursor: pointer;
  color: var(--text2);
  font-family: 'IBM Plex Mono', monospace;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 5px;
}

.cat-btn:hover {
  color: var(--text);
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.search-form {
  display: flex;
  gap: 4px;
}

.search-input {
  background: var(--surface2);
  border: 1px solid var(--border);
  color: var(--text);
  font-family: 'IBM Plex Mono', monospace;
  font-size: 12px;
  padding: 6px 12px;
  border-radius: 4px;
  width: 180px;
  outline: none;
}

.search-input:focus {
  border-color: var(--accent);
  width: 220px;
}

.search-btn {
  border: none;
  color: #000;
  font-size: 16px;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
}

.dark-toggle,
.menu-toggle {
  background: var(--surface2);
  border: 1px solid var(--border);
  color: var(--text);
  font-size: 16px;
  width: 36px;
  height: 36px;
  border-radius: 4px;
  cursor: pointer;
}

.menu-toggle {
  display: none;
}

.news-main {
  max-width: 1400px;
  margin: 0 auto;
  padding: 48px 24px 64px;
}

.section-header {
  margin-bottom: 40px;
}

.section-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 900;
  letter-spacing: -1px;
  display: flex;
  align-items: center;
  gap: 14px;
  line-height: 1;
}

.section-icon {
  font-size: 0.75em;
  opacity: 0.7;
}

.section-sub {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 12px;
  color: var(--text2);
  margin-top: 10px;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(340px, 1fr)
  );
  gap: 24px;
}

.news-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s, box-shadow 0.3s;
  animation: cardIn 0.5s both;
  animation-delay: var(--delay);
}

@keyframes cardIn {
  from {
    opacity: 0;
    transform: translateY(24px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card-image-wrap {
  position: relative;
  overflow: hidden;
  height: 200px;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s;
  display: block;
}

.news-card:hover .card-image {
  transform: scale(1.04);
}

.card-image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 40%,
    rgba(0,0,0,0.7)
  );
}

.card-source {
  position: absolute;
  bottom: 10px;
  left: 12px;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #fff;
  padding: 3px 8px;
  border-radius: 2px;
}

.card-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
}

.card-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-author {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 11px;
  color: var(--accent);
}

.card-time {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 11px;
  color: var(--text2);
}

.card-title {
  font-family: 'Playfair Display', serif;
  font-size: 18px;
  line-height: 1.3;
  color: var(--text);
}

.card-desc {
  font-size: 14px;
  line-height: 1.6;
  color: var(--text2);
}

.card-link {
  margin-top: auto;
  padding-top: 12px;
  border-top: 1px solid;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 12px;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-accent-bar {
  height: 3px;
  width: 0;
  transition: width 0.4s;
}

.news-card:hover .card-accent-bar {
  width: 100%;
}

.spinner-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 80px 0;
}

.spinner-orbit {
  display: flex;
  gap: 10px;
}

.spinner-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  animation: bounce 0.8s ease-in-out infinite alternate;
}

@keyframes bounce {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-20px);
  }
}

.spinner-text {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 13px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.error-box {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  border: 1px solid;
  border-radius: 8px;
  padding: 28px 32px;
  margin: 40px 0;
  background: var(--surface);
}

.error-icon {
  font-size: 28px;
}

.error-box strong {
  font-family: 'Playfair Display', serif;
  font-size: 18px;
}

.error-box p {
  font-size: 13px;
  color: var(--text2);
  margin: 6px 0 14px;
}

.retry-btn {
  border: none;
  color: #000;
  font-weight: 600;
  padding: 8px 18px;
  border-radius: 4px;
  cursor: pointer;
}

.no-results {
  padding: 80px 20px;
  text-align: center;
  color: var(--text2);
  font-family: 'IBM Plex Mono', monospace;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin-top: 56px;
  padding-top: 32px;
  border-top: 1px solid var(--border);
}

.page-btn {
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--text);
  font-family: 'IBM Plex Mono', monospace;
  font-size: 13px;
  padding: 10px 24px;
  border-radius: 4px;
  cursor: pointer;
}

.page-btn:hover:not(:disabled) {
  border-color: var(--p-accent);
  color: var(--p-accent);
}

.page-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.page-num {
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  font-weight: 900;
  min-width: 80px;
  text-align: center;
}

.footer {
  text-align: center;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 11px;
  color: var(--text2);
  letter-spacing: 1px;
  padding: 24px;
  border-top: 1px solid var(--border);
}

@media (max-width: 768px) {
  .navbar-cats {
    display: none;
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    background: var(--nav-bg);
    flex-direction: column;
    padding: 12px;
    border-bottom: 1px solid var(--border);
  }

  .navbar-cats.open {
    display: flex;
  }

  .cat-btn {
    justify-content: flex-start;
    font-size: 13px;
    padding: 10px 12px;
  }

  .menu-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .search-input {
    width: 120px;
  }

  .news-grid {
    grid-template-columns: 1fr;
  }

  .news-main {
    padding: 32px 16px 48px;
  }
}

@media (max-width: 480px) {
  .search-form {
    display: none;
  }

  .navbar-inner {
    padding: 0 12px;
  }
}
`;

export default App;