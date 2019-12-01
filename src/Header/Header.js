const Header = () => {
    return (
<header>
	<div className="container">
	<div className="header">
	<div className="header_wrap">
	<div className="header_top">
	<nav className="header_menu">
		<ul className="menu_list">
		  <li className="menu_item"><a className="menu_link" href="">Home<div className="arrow"></div></a>
		  	<ul className="dropdown">
		  		<div className="dropdown-content">
		  		<li className="submenu_item"><a className="submenu_link" href="#">Sub-1</a></li>
		        <li className="submenu_item"><a className="submenu_link" href="#">Sub-2</a></li>
		        <li className="submenu_item"><a className="submenu_link" href="#">Sub-3</a></li>
		    </div>
        	</ul>
		  </li>
		  <li className="menu_item"><a className="menu_link" href="">Features <div className="arrow"></div></a>
		  <ul className="dropdown">
		  		<div className="dropdown-content">
		  		<li className="submenu_item"><a className="submenu_link" href="#">Sub-1</a></li>
		        <li className="submenu_item"><a className="submenu_link" href="#">Sub-2</a></li>
		        <li className="submenu_item"><a className="submenu_link" href="#">Sub-3</a></li>
		    </div>
        	</ul>
        </li>
		  <li className="menu_item"><a className="menu_link" href="">Posttypes <div className="arrow"></div></a>
		  <ul className="dropdown">
		  		<div className="dropdown-content">
		  		<li className="submenu_item"><a className="submenu_link" href="#">Sub-1</a></li>
		        <li className="submenu_item"><a className="submenu_link" href="#">Sub-2</a></li>
		        <li className="submenu_item"><a className="submenu_link" href="#">Sub-3</a></li>
		    </div>
        	</ul>
        </li>
		  <li className="menu_item"><a className="menu_link" href="">Pages <div className="arrow"></div></a>
		  <ul className="dropdown">
		  		<div className="dropdown-content">
		  		<li className="submenu_item"><a className="submenu_link" href="#">Sub-1</a></li>
		        <li className="submenu_item"><a className="submenu_link" href="#">Sub-2</a></li>
		        <li className="submenu_item"><a className="submenu_link" href="#">Sub-3</a></li>
		    </div>
        	</ul>
        </li>
		  <li className="menu_item"><a className="menu_link" href="">Categories <div className="arrow"></div></a>
		  <ul className="dropdown">
		  		<div className="dropdown-content">
		  		<li className="submenu_item"><a className="submenu_link" href="#">Sub-1</a></li>
		        <li className="submenu_item"><a className="submenu_link" href="#">Sub-2</a></li>
		        <li className="submenu_item"><a className="submenu_link" href="#">Sub-3</a></li>
		    </div>
        	</ul>
        </li>
		  <li className="menu_item"><a className="menu_link" href="">Contact</a></li>
		</ul>
	</nav>
	<div className="social_networks">
		<div className="social_networks_icons"><a href="#"><img src="img/twt.png"/></a></div>
		<div className="social_networks_icons"><a href="#"><img src="img/fb.png"/></a></div>
		<div className="social_networks_icons"><a href="#"><img src="img/in.png"/></a></div>
		<div className="social_networks_icons"><a href="#"><img src="img/inst.png"/></a></div>
		<div className="social_networks_icons"><a href="#"><img src="img/google.png"/></a></div>
	</div>
	</div>
	<div className="title">
	 <h1 className="header_name">Noémi</h1>
	 <div className="border_bottom"></div>
	</div>
	<div className="header_articles">
			<div className="article">
				<img src="img/image1.png"/>
				<div className="image_overlay"></div>
				<div className="articlebox">
					<h2 className="articletags">
						<a href="#" className="articletags_link">beauty</a>
						<a href="#" className="articletags_link">health</a>  
						<a href="#" className="articletags_link">lifestyle</a>
					</h2>

					<p className="articletext"><a href="#" className="articletext_link">from grapefruit to lemons to oranges, citrus does you good</a></p>
						<div className="dateandcomments">
							<div className="date">June 12, 2019</div>
							<a href="#" className="comments"><span className="commentsnumber">24</span></a>
						</div>
				</div>
					<div className="overlay"></div>
			</div>
			<div className="article">
				<img src="img/image2.png"/>
				<div className="image_overlay"></div>
				<div className="articlebox">
					<h2 className="articletags"><a href="#" className="articletags_link">health</a></h2>
					<p className="articletext"><a href="#" className="articletext_link">5 tips to supercharge your motivation</a></p>
						<div className="dateandcomments">
							<div className="date">June 10, 2019</div>
							<a href="#" className="comments"><span className="commentsnumber">41</span></a>
						</div>
				</div>
				<div className="overlay"></div>
			</div>
			<div className="article">
				<img src="img/image3.png" />
				<div className="image_overlay"></div>
				<div className="articlebox">
					<h2 className="articletags"><a href="#" className="articletags_link">beauty</a></h2>
					<p className="articletext"><a href="#" className="articletext_link">to keep makeup looking fresh take a powder</a></p>
						<div className="dateandcomments">
							<div className="date">June 9, 2019</div>
							<a href="#" className="comments"><span className="commentsnumber">24</span></a>
						</div>
				</div>
				<div className="overlay"></div>
			</div>
		</div>
</div>
</div>
</div>
</header>
)
}

export default Header
