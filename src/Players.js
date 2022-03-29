const players = [
	{
	   "Team":"IND",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Matt Ryan",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/732.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2008
	},
	{
	   "Team":"GB",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Aaron Rodgers",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/2593.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2005
	},
	{
	   "Team":"TB",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Tom Brady",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/4314.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2000
	},
	{
	   "Team":"SF",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Alex Mack",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/8485.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2009
	},
	{
	   "Team":"LAR",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Matthew Stafford",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/9038.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2009
	},
	{
	   "Team":"NO",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Malcolm Jenkins",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/9196.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2009
	},
	{
	   "Team":"NE",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Devin McCourty",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/10978.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2010
	},
	{
	   "Team":"PIT",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Joe Haden",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/11043.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2010
	},
	{
	   "Team":"PIT",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Tyson Alualu",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/11151.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2010
	},
	{
	   "Team":"PHI",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Brandon Graham",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/11315.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2010
	},
	{
	   "Team":"BUF",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Rodger Saffold III",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/11545.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2010
	},
	{
	   "Team":"SF",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Trent Williams",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/12308.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2010
	},
	{
	   "Team":"PHI",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Jason Kelce",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/12707.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2011
	},
	{
	   "Team":"PIT",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Cameron Heyward",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/12902.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2011
	},
	{
	   "Team":"ARI",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"J.J. Watt",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/12955.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2011
	},
	{
	   "Team":"BUF",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Von Miller",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/13022.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2011
	},
	{
	   "Team":"ARI",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Rodney Hudson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/13037.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2011
	},
	{
	   "Team":"DAL",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Tyron Smith",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/13129.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2011
	},
	{
	   "Team":"GB",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Randall Cobb",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/13227.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2011
	},
	{
	   "Team":"NO",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Mark Ingram II",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/13337.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2011
	},
	{
	   "Team":"NO",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Cameron Jordan",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/13338.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2011
	},
	{
	   "Team":"CHI",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Robert Quinn",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/13393.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2011
	},
	{
	   "Team":"PHI",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Fletcher Cox",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/13721.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2012
	},
	{
	   "Team":"LV",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Chandler Jones",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/13749.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2012
	},
	{
	   "Team":"TEN",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Ryan Tannehill",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/13799.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2012
	},
	{
	   "Team":"NO",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Demario Davis",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/13810.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2012
	},
	{
	   "Team":"JAX",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Marvin Jones Jr.",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/13870.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2012
	},
	{
	   "Team":"BAL",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Kevin Zeitler",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/13882.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2012
	},
	{
	   "Team":"ARI",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Kelvin Beachum",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/13913.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2012
	},
	{
	   "Team":"TEN",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Ben Jones",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/13969.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2012
	},
	{
	   "Team":"BAL",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Derek Wolfe",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14059.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2012
	},
	{
	   "Team":"MIN",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Kirk Cousins",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14252.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2012
	},
	{
	   "Team":"ATL",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Casey Hayward Jr.",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14285.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2012
	},
	{
	   "Team":"TB",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Lavonte David",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14375.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2012
	},
	{
	   "Team":"DET",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Michael Brockers",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14397.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2012
	},
	{
	   "Team":"MIN",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Harrison Smith",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14461.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2012
	},
	{
	   "Team":"DEN",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Russell Wilson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14536.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2012
	},
	{
	   "Team":"NE",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Lawrence Guy",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14743.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2011
	},
	{
	   "Team":"ARI",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Zach Ertz",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14856.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2013
	},
	{
	   "Team":"PHI",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Lane Johnson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14857.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2013
	},
	{
	   "Team":"BUF",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Jordan Poyer",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14860.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2013
	},
	{
	   "Team":"TEN",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Robert Woods",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14871.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2013
	},
	{
	   "Team":"TB",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Logan Ryan",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14888.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2013
	},
	{
	   "Team":"TB",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Ryan Jensen",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14900.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2013
	},
	{
	   "Team":"HOU",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Rex Burkhead",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14917.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2013
	},
	{
	   "Team":"ARI",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"DeAndre Hopkins",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14986.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2013
	},
	{
	   "Team":"TEN",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"David Quessenberry",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14988.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2013
	},
	{
	   "Team":"KC",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Travis Kelce",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15048.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2013
	},
	{
	   "Team":"LAC",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Keenan Allen",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15076.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2013
	},
	{
	   "Team":"ARI",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Justin Pugh",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15094.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2013
	},
	{
	   "Team":"PHI",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Darius Slay",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15127.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2013
	},
	{
	   "Team":"GB",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"David Bakhtiari",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15131.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2013
	},
	{
	   "Team":"BUF",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Micah Hyde",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15136.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2013
	},
	{
	   "Team":"ATL",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Cordarrelle Patterson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15150.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2013
	},
	{
	   "Team":"MIA",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Terron Armstead",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15193.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2013
	},
	{
	   "Team":"DEN",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Mike Purcell",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15375.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2013
	},
	{
	   "Team":"MIN",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Adam Thielen",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15534.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2013
	},
	{
	   "Team":"DEN",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Billy Turner",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16029.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"ATL",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Damien Williams",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16031.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"NE",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Malcolm Butler",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16035.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"SF",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Jimmy Garoppolo",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16041.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"NE",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"James White",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16056.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"CHI",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Dakota Dozier",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16061.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"HOU",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Terrence Brooks",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16078.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"NO",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"James Hurst",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16086.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"NYJ",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"C.J. Mosley",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16093.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"CLE",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Joel Bitonio",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16125.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"HOU",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Christian Kirksey",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16133.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"DEN",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"K'Waun Williams",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16143.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"PIT",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Stephon Tuitt",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16159.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"TEN",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Taylor Lewan",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16172.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"HOU",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Justin McCray",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16173.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"LAC",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Matt Feiler",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16198.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"NE",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"James Ferentz",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16199.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"LAR",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Allen Robinson II",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16263.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"TB",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Shaquil Barrett",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16271.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"SF",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Dee Ford",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16294.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"TEN",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Denico Autry",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16310.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"LV",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Derek Carr",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16311.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"NYG",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Justin Ellis",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16315.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"SEA",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Shelby Harris",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16319.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"SEA",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Gabe Jackson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16320.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"LAC",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Khalil Mack",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16323.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"DAL",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"DeMarcus Lawrence",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16366.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"DAL",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Zack Martin",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16369.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"ARI",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Devon Kennard",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16397.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"BAL",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Morgan Moses",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16419.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"WAS",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Charles Leno Jr.",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16436.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"LV",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Davante Adams",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16470.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"LAC",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Corey Linsley",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16481.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"ATL",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Jake Matthews",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16531.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"WAS",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Andrew Norwell",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16560.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"HOU",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Brandin Cooks",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16568.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"TB",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Mike Evans",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16597.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"LAR",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Aaron Donald",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16618.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"WAS",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Logan Thomas",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16656.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"SF",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Jimmie Ward",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16678.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"HOU",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Justin Britt",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16681.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"NE",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Adrian Phillips",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16724.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"NO",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Jameis Winston",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16762.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"ATL",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Marcus Mariota",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16763.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"DAL",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Dante Fowler Jr.",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16764.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"CLE",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Amari Cooper",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16765.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"JAX",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Brandon Scherff",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16766.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"NYG",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Leonard Williams",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16767.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"NO",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Andrus Peat",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16774.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"SF",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Arik Armstead",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16778.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"BAL",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Marcus Peters",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16779.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"CAR",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Cameron Erving",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16780.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"NE",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Nelson Agholor",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16781.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"TEN",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Bud Dupree",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16783.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"ARI",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"D.J. Humphries",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16785.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"CAR",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Shaq Thompson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16786.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"MIA",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Byron Jones",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16788.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"NYJ",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Laken Tomlinson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16789.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"JAX",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Malcom Brown",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16793.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"TB",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Donovan Smith",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16795.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"GB",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Preston Smith",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16799.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"MIN",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Eric Kendricks",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16806.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"LV",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Denzel Perryman",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16809.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"BUF",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Mitch Morse",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16810.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"DEN",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Ronald Darby",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16811.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"LAR",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Rob Havenstein",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16818.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"ARI",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Markus Golden",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16819.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"DEN",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Randy Gregory",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16821.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"KC",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Frank Clark",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16824.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"SEA",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Tyler Lockett",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16830.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"NYJ",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Tevin Coleman",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16834.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"BUF",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Duke Johnson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16838.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"MIN",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Jordan Hicks",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16845.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"MIN",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Danielle Hunter",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16849.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"BUF",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Jamison Crowder",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16866.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"MIN",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Za'Darius Smith",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16883.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"ATL",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Mike Davis",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16887.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"CAR",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Damien Wilson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16888.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"NYG",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Jon Feliciano",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16889.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"TB",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Shaq Mason",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16892.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"NYG",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Mark Glowinski",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16895.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"GB",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Adrian Amos",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16902.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"WAS",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Bobby McCain",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16905.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"BUF",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Stefon Diggs",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16906.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"NYJ",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"C.J. Uzomah",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16917.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"SEA",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Quandre Diggs",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16960.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"LV",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Darren Waller",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16964.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"NE",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Trent Brown",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17003.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"LV",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Denzelle Good",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17014.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"CIN",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"La'el Collins",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17058.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"ATL",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Grady Jarrett",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17059.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"PHI",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Anthony Harris",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17187.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"MIA",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Raheem Mostert",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17217.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"CLE",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Troy Hill",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17294.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"NE",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"David Andrews",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17443.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"ATL",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Erik Harris",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17899.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"LAC",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Joey Bosa",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17915.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"HOU",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Laremy Tunsil",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17918.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"LAR",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Jalen Ramsey",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17919.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"WAS",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Carson Wentz",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17920.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"BAL",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Ronnie Stanley",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17921.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"DET",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Jared Goff",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17922.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"DAL",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Ezekiel Elliott",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17923.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"PIT",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Myles Jack",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17925.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"IND",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"DeForest Buckner",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17933.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"LAR",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Leonard Floyd",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17935.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"CLE",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Jack Conklin",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17936.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"LV",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Vernon Butler",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17944.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"WAS",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"William Jackson III",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17945.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"DET",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Taylor Decker",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17946.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"GB",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Kenny Clark",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17947.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"IND",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Ryan Kelly",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17948.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"NYJ",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Sheldon Rankins",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17949.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"CIN",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Eli Apple",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17950.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"SEA",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Artie Burns",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17953.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"MIA",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Emmanuel Ogbah",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17958.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"TEN",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Derrick Henry",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17959.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"NO",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Michael Thomas",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17960.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"NYG",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Sterling Shepard",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17961.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"TEN",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Austin Hooper",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17963.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"NE",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Hunter Henry",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17975.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"MIA",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Xavien Howard",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17976.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"LAR",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"A'Shawn Robinson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17979.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"GB",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Jarran Reed",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17981.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"ATL",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Deion Jones",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17983.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"CIN",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Tyler Boyd",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17986.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"CHI",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Cody Whitehair",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17987.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"CIN",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Vonn Bell",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17991.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"NYG",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"James Bradberry",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17992.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"TEN",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Kevin Byard",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17994.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"HOU",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Maliek Collins",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17997.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"IND",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Yannick Ngakoue",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17999.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"LV",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Kenyan Drake",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18003.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"KC",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Joe Thuney",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18008.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"PHI",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Isaac Seumalo",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18009.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"WAS",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Kendall Fuller",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18013.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"PHI",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Javon Hargrave",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18017.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"DEN",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Graham Glasgow",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18020.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"DEN",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Justin Simmons",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18023.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"HOU",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Eric Murray",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18029.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"LAR",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Tyler Higbee",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18032.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"GB",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"De'Vondre Campbell",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18037.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"NO",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"David Onyemata",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18042.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"NYG",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Blake Martinez",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18052.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"DAL",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Dak Prescott",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18055.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"GB",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Dean Lowry",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18056.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"NYJ",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Connor McGovern",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18062.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"NE",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Matthew Judon",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18064.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"SEA",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Quinton Jefferson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18065.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"CAR",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Matt Ioannidis",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18069.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"DET",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Halapoulivaati Vaitai",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18081.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"MIA",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Tyreek Hill",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18082.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"CIN",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"D.J. Reader",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18083.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"CLE",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Jakeem Grant Sr.",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18103.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"DAL",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Anthony Brown",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18106.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"WAS",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Wes Schweitzer",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18112.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"HOU",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Kamu Grugier-Hill",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18124.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"MIA",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Elandon Roberts",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18130.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"CIN",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Ted Karras",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18137.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"NE",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Jalen Mills",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18149.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"DAL",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Jayron Kearse",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18160.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"SEA",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Austin Blythe",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18164.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"NE",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Jonathan Jones",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18177.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"CAR",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Robby Anderson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18187.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"DET",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Romeo Okwara",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18268.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"JAX",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Roy Robertson-Harris",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18292.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"CIN",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Mike Hilton",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18316.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"KC",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Chris Jones",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18331.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"LAC",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Austin Johnson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18333.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"WAS",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"J.D. McKissic",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18464.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"CAR",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Cory Littleton",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18559.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"NYJ",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"George Fant",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18599.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"NYG",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Elijhaa Penny",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18617.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"CHI",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Lucas Patrick",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18710.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"TB",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Leonard Fournette",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18803.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"CLE",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Myles Garrett",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18807.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"PIT",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Mitchell Trubisky",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18811.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"CLE",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Deshaun Watson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18857.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"CIN",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Joe Mixon",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18858.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"MIN",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Dalvin Cook",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18872.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"WAS",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Jonathan Allen",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18875.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"CLE",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"David Njoku",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18876.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"CAR",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Christian McCaffrey",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18877.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"NO",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Alvin Kamara",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18878.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"NYJ",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Corey Davis",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18879.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"TB",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Chris Godwin",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18880.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"LAR",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Cooper Kupp",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18882.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"KC",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"JuJu Smith-Schuster",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18883.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"KC",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Patrick Mahomes",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18890.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"DEN",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Garett Bolles",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18899.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"IND",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Mo Alie-Cox",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18900.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"NO",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Marshon Lattimore",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18905.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"PHI",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Haason Reddick",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18909.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"JAX",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Cam Robinson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18910.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"PHI",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Derek Barnett",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18911.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"JAX",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Evan Engram",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18912.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"DET",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Jarrad Davis",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18913.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"LAC",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Mike Williams",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18914.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"PIT",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"T.J. Watt",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18916.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"BAL",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Marlon Humphrey",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18917.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"BUF",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Tre'Davious White",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18918.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"DET",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Charles Harris",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18921.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"NO",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Ryan Ramczyk",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18922.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"SEA",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Jamal Adams",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18923.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"NYG",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Adoree' Jackson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18924.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"JAX",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Zay Jones",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18926.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"ARI",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Budda Baker",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18927.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"SEA",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Sidney Jones IV",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18929.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"BAL",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Tyus Bowser",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18930.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"LAC",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Gerald Everett",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18935.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"BAL",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Marcus Williams",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18937.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"MIN",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Dalvin Tomlinson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18938.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"NO",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Marcus Maye",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18939.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"CLE",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Malik McDowell",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18941.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"CLE",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Kareem Hunt",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18944.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"BUF",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Dion Dawkins",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18948.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"CAR",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Taylor Moton",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18950.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"CIN",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Chidobe Awuzie",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18953.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"TEN",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Zach Cunningham",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18956.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"CAR",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"D'Onta Foreman",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18957.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"DAL",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Jourdan Lewis",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18975.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"NYG",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Kenny Golladay",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18977.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"CLE",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"John Johnson III",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18979.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"CIN",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Trey Hendrickson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18981.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"GB",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Rasul Douglas",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18982.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"ARI",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"James Conner",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18983.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"PIT",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Cameron Sutton",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18984.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"JAX",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Shaquill Griffin",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18986.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"CIN",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Samaje Perine",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18993.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"NYJ",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Carl Lawson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18994.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"DET",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Jamaal Williams",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18995.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"CHI",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Eddie Jackson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19004.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"HOU",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Jalen Reeves-Maybin",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19009.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"IND",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Grover Stewart",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19014.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"NE",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Deatrich Wise Jr.",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19020.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"JAX",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Rayshawn Jenkins",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19026.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"BUF",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Matt Milano",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19037.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"GB",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Aaron Jones",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19045.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"CLE",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Anthony Walker",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19049.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"NE",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Davon Godchaux",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19053.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"HOU",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Desmond King II",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19062.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"SF",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"George Kittle",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19063.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"LV",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Jayon Brown",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19066.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"BAL",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Chuck Clark",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19070.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"CAR",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Xavier Woods",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19084.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"CHI",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Al-Quadin Muhammad",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19105.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"SEA",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Chris Carson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19119.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"WAS",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Chase Roullier",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19134.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"SF",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Daniel Brunskill",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19139.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"DEN",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Tim Patrick",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19207.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"NO",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Taysom Hill",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19238.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"IND",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Kenny Moore II",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19287.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"HOU",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Pharaoh Brown",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19304.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"CHI",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Nicholas Morrow",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19310.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"NE",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Kendrick Bourne",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19318.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"NYG",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Matt Breida",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19319.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"PIT",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Arthur Maulet",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19375.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"NYG",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Ricky Seals-Jones",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19410.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"LAC",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Storm Norton",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19486.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"GB",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Robert Tonyan",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19491.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"LAC",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Michael Davis",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19560.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"LAC",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Austin Ekeler",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19562.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"PIT",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Trey Edmunds",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19599.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"HOU",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Dare Ogunbowale",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19626.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"NYG",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Saquon Barkley",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19766.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"BAL",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Lamar Jackson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19781.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"CLE",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Nick Chubb",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19798.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"SEA",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Rashaad Penny",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19799.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"DEN",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Courtland Sutton",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19800.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"BUF",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Josh Allen",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19801.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"BAL",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Mark Andrews",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19803.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"KC",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Orlando Brown",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19814.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"JAX",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Christian Kirk",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19815.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"DET",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"DJ Chark Jr.",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19816.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"CHI",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Roquan Smith",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19827.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"PIT",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Minkah Fitzpatrick",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19829.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"CLE",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Denzel Ward",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19830.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"IND",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Quenton Nelson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19831.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"DEN",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Bradley Chubb",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19832.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"SF",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Mike McGlinchey",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19833.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"TB",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Vita Vea",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19834.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"NO",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Marcus Davenport",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19835.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"BUF",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Tremaine Edmunds",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19836.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"LAC",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Derwin James Jr.",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19837.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"DAL",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Leighton Vander Esch",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19838.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"GB",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Jaire Alexander",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19839.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"LV",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Kolton Miller",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19840.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"WAS",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Daron Payne",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19841.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"CIN",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Hayden Hurst",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19843.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"CAR",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"DJ Moore",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19844.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"DET",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Frank Ragnow",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19845.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"DET",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Mike Hughes",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19847.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"NE",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Isaiah Wynn",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19848.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"CAR",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Austin Corbett",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19851.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"IND",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Darius Leonard",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19852.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"MIA",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Mike Gesicki",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19853.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"PIT",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"James Daniels",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19855.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"IND",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Braden Smith",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19857.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"ARI",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Will Hernandez",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19860.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"KC",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Ronald Jones II",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19861.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"PHI",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Dallas Goedert",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19863.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"DAL",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"James Washington",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19865.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"KC",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Justin Reid",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19866.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"DAL",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Michael Gallup",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19867.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"ATL",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Isaiah Oliver",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19868.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"CAR",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Donte Jackson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19870.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"CIN",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Sam Hubbard",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19871.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"CIN",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Jessie Bates III",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19873.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"DET",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Tracy Walker III",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19876.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"KC",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Derrick Nnadi",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19880.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"CHI",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Justin Jones",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19881.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"MIA",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Jerome Baker",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19882.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"MIN",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Brian O'Neill",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19883.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"ATL",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Lorenzo Carter",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19886.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"LV",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Brandon Parker",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19888.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"SF",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Fred Warner",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19891.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"TB",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Carlton Davis III",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19892.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"LAR",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Joe Noteboom",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19895.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"NO",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Tre'Quan Smith",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19897.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"PIT",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Mason Cole",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19898.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"MIN",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Harrison Phillips",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19900.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"CLE",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Ronnie Harrison Jr.",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19904.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"PIT",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Chukwuma Okorafor",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19906.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"CIN",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Alex Cappa",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19908.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"IND",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Nyheim Hines",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19912.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"MIA",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Chase Edmonds",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19919.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"DAL",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Dalton Schultz",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19920.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"BUF",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Taron Johnson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19928.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"LV",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Bilal Nichols",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19930.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"DEN",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Josey Jewell",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19933.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"PHI",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Kyzir White",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19940.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"LAR",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Brian Allen",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19941.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"NYJ",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"John Franklin-Myers",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19942.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"NE",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Ja'Whaun Bentley",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19944.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"PHI",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Avonte Maddox",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19949.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"NYJ",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"D.J. Reed",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19953.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"NYJ",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Jordan Whitehead",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19954.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"CLE",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Wyatt Teller",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19962.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"KC",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Marquez Valdes-Scantling",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19976.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"LAC",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Sebastian Joseph-Day",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19985.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"HOU",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Ogbonnia Okoronkwo",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19987.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"JAX",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Folorunso Fatukasi",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19993.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"BUF",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Tim Settle",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20002.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"TB",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Russell Gage",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20006.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"JAX",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Foyesade Oluokun",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20007.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"CAR",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Bradley Bozeman",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20008.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"MIA",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Cedrick Wilson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20013.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"NYJ",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Braxton Berrios",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20038.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"PHI",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Boston Scott",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20039.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"TEN",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Trenton Cannon",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20040.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"PHI",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Jordan Mailata",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20042.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"IND",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Matt Pryor",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20043.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"MIA",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Zach Sieler",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20051.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"ATL",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Auden Tate",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20057.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"GB",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Allen Lazard",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20145.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"CHI",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Byron Pringle",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20150.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"DEN",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Mike Boone",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20159.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"LAC",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"J.C. Jackson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20167.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"MIN",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Chandon Sullivan",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20178.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"SEA",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Poona Ford",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20185.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"ARI",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"David Wells",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20199.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"SF",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Charvarius Ward",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20204.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"HOU",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Tavierre Thomas",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20217.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"BAL",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Gus Edwards",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20239.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"BUF",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Ike Boettger",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20252.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"SF",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Jeff Wilson Jr.",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20360.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"SF",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Emmanuel Moseley",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20366.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"TB",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Aaron Stinnie",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20379.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"WAS",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Danny Johnson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20395.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"IND",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Brandon Facyson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20434.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"WAS",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Cam Sims",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20529.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"TEN",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Dontrell Hilliard",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20566.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"JAX",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Darious Williams",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20570.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"SF",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Nick Bosa",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20713.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LV",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Johnathan Abram",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20731.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LAC",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Nasir Adderley",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20733.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"JAX",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Josh Allen",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20737.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"ARI",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Zach Allen",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20738.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"JAX",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Ryquell Armstead",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20743.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LAR",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"David Edwards",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20747.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"PHI",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"T.J. Edwards",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20749.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LAR",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Bobby Evans",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20752.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"SEA",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Noah Fant",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20753.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"KC",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Rashad Fenton",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20754.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LAR",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Greg Gaines",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20764.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NO",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"C.J. Gardner-Johnson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20766.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"GB",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Rashan Gary",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20767.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"MIA",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Myles Gaskin",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20768.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"SF",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Dre Greenlaw",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20778.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"KC",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Mecole Hardman",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20788.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NE",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Damien Harris",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20790.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"DET",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Will Harris",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20791.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LAR",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Darrell Henderson Jr.",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20798.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"BAL",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Justice Hill",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20802.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"DAL",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Trysten Hill",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20803.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"DET",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"T.J. Hockenson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20805.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"TEN",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Amani Hooker",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20811.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"HOU",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Tytus Howard",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20813.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LV",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Josh Jacobs",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20824.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LV",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Andre James",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20825.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"GB",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Elgton Jenkins",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20828.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NYJ",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Ty Johnson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20837.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"HOU",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Lonnie Johnson Jr.",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20840.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NYG",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Daniel Jones",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20841.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"DEN",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Dre'Mont Jones",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20842.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"BUF",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Dawson Knox",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20850.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NYG",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Dexter Lawrence",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20852.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"ATL",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Chris Lindstrom",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20857.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"SEA",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Drew Lock",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20859.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LAR",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"David Long Jr.",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20861.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"TEN",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"David Long Jr.",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20862.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NYG",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Julian Love",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20864.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"MIN",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Alexander Mattison",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20868.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NO",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Erik McCoy",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20869.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"ATL",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Kaleb McGary",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20870.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"DAL",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Connor McGovern",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20871.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"WAS",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Terry McLaurin",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20873.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"SEA",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"DK Metcalf",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20875.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NE",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Jakobi Meyers",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20876.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"CHI",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"David Montgomery",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20882.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LV",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Trayvon Mullen Jr.",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20887.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"ARI",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Byron Murphy Jr.",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20888.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"ARI",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Kyler Murray",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20889.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"IND",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Bobby Okereke",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20897.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"BUF",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Ed Oliver",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20898.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"DET",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Amani Oruwariye",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20903.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NE",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Devine Ozigbo",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20904.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"DAL",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Tony Pollard",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20912.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"CIN",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Germaine Pratt",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20915.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LAR",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Taylor Rapp",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20919.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LV",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Hunter Renfrow",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20924.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"DEN",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Dalton Risner",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20926.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"SF",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Deebo Samuel",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20932.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"PHI",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Miles Sanders",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20933.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"TEN",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Jeffery Simmons",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20940.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"BUF",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Devin Singletary",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20941.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"MIN",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Irv Smith Jr.",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20949.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"PIT",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Benny Snell Jr.",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20950.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"WAS",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Montez Sweat",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20956.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"JAX",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Jawaan Taylor",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20960.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"KC",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Juan Thornhill",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20965.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LAC",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Jerry Tillery",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20967.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LAC",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Drue Tranquill",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20968.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"MIA",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Andrew Van Ginkel",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20971.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"TB",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Devin White",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20981.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"MIA",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Christian Wilkins",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20983.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"CIN",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Jonah Williams",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20987.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NYJ",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Quinnen Williams",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20989.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"IND",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Khari Willis",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20991.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LV",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Rock Ya-Sin",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21001.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LV",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Maxx Crosby",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21015.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"KC",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"DeAndre Baker",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21020.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"MIN",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Garrett Bradbury",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21038.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"TEN",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"A.J. Brown",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21042.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"BAL",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Marquise Brown",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21045.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"TB",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Sean Murphy-Bunting",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21050.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"CAR",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Brian Burns",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21052.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"PIT",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Devin Bush",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21054.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"TEN",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Nate Davis",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21060.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"TB",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Jamel Dean",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21064.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"MIA",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Michael Deiter",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21065.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"PIT",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Diontae Johnson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21077.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"GB",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Darnell Savage",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21107.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NYJ",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Quincy Williams",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21109.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"GB",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Juwann Winfree",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21115.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"WAS",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Cole Holcomb",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21120.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"ATL",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Olamide Zaccheaus",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21142.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"MIA",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Nik Needham",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21192.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"MIA",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Patrick Laird",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21211.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"DEN",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Andrew Beck",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21227.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"JAX",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Andrew Wingard",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21281.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"CHI",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Khari Blasingame",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21310.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LAR",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Troy Reeder",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21332.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NO",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Shy Tuttle",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21422.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LAC",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Jalen Guyton",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21448.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"DET",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Craig Reynolds",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21564.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"CLE",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"D'Ernest Johnson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21593.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"ARI",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Jalen Thompson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21635.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"BAL",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"J.K. Dobbins",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21674.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"MIA",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Tua Tagovailoa",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21677.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"DAL",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"CeeDee Lamb",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21679.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"LAC",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Justin Herbert",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21681.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"IND",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Jonathan Taylor",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21682.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"DET",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"D'Andre Swift",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21684.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"MIN",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Justin Jefferson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21685.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"PHI",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Jalen Reagor",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21686.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"PHI",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"DeVonta Smith",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21687.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"LAR",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Cam Akers",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21688.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CIN",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Tee Higgins",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21690.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CAR",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Chuba Hubbard",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21691.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DEN",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Jerry Jeudy",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21692.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CIN",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Joe Burrow",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21693.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"JAX",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Travis Etienne Jr.",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21696.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"MIN",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"K.J. Osborn",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21714.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"SF",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Jauan Jennings",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21717.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"BAL",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Devin Duvernay",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21721.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"BUF",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Gabriel Davis",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21735.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"LV",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Bryan Edwards",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21736.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"IND",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Michael Pittman Jr.",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21744.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"SF",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Brandon Aiyuk",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21747.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NO",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Marquez Callaway",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21750.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"PIT",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Chase Claypool",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21752.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CLE",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Donovan Peoples-Jones",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21754.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"HOU",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Nico Collins",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21756.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"SF",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"JaMycal Hasty",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21765.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"PIT",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Najee Harris",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21768.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"KC",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Clyde Edwards-Helaire",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21769.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CHI",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Cole Kmet",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21772.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"ARI",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Eno Benjamin",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21773.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NO",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Tony Jones Jr.",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21774.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"LAC",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Joshua Kelley",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21776.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"ARI",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Jonathan Ward",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21782.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CLE",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Harrison Bryant",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21783.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"BUF",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Zack Moss",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21784.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"TB",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Ke'Shawn Vaughn",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21788.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"DEN",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Albert Okwuegbunam",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21794.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"GB",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Josiah Deguara",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21798.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"GB",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"AJ Dillon",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21802.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"PHI",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Jalen Hurts",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21831.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NE",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"J.J. Taylor",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21837.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"GB",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Kylin Hill",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21840.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"CHI",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Darrynton Evans",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21845.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"WAS",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Antonio Gibson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21861.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"SF",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Javon Kinlaw",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21867.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"HOU",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Jonathan Greenard",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21879.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"JAX",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"K'Lavon Chaisson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21888.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CAR",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Yetur Gross-Matos",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21896.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"PIT",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Alex Highsmith",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21897.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"LAR",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Terrell Lewis",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21903.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CAR",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Jeremy Chinn",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21921.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"WAS",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Kamren Curl",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21923.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NYJ",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Ashtyn Davis",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21925.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"MIA",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Brandon Jones",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21927.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"ATL",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Jaylinn Hawkins",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21933.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"KC",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"L'Jarius Sneed",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21934.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NYG",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Xavier McKinney",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21936.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"LAR",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Jordan Fuller",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21937.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"TB",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Antoine Winfield Jr.",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21940.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"MIA",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Robert Hunt",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21943.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"DET",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Jonah Jackson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21944.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"HOU",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Charlie Heck",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21947.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CLE",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Nick Harris",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21948.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"ATL",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Matt Hennessy",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21951.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"PHI",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Quez Watkins",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21957.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"SEA",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Freddie Swain",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21960.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CHI",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Darnell Mooney",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21961.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NE",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Malcolm Perry",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21962.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"JAX",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"James Robinson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21970.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"JAX",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Shaquille Quarterman",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21974.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"BAL",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Patrick Queen",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21982.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"KC",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Willie Gay",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21984.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"LAC",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Kenneth Murray Jr.",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21985.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"ATL",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Mykal Walker",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21989.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"MIN",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Ezra Cleveland",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21993.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"DAL",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Tyler Biadasz",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21995.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"DEN",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Lloyd Cushenberry III",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21997.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CIN",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Logan Wilson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22003.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"ARI",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Isaiah Simmons",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22004.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"SEA",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Jordyn Brooks",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22005.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NYJ",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Mekhi Becton",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22009.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"BAL",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Trystan Colon",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22010.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"JAX",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Ben Bartch",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22012.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"KC",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Lucas Niang",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22018.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"SF",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Colton McKivitz",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22023.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CLE",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Jedrick Wills Jr.",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22024.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NYG",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Andrew Thomas",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22025.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"BAL",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Tyre Phillips",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22027.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"SEA",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Damien Lewis",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22028.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"TB",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Tristan Wirfs",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22033.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NO",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Cesar Ruiz",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22036.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NYG",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Shane Lemieux",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22039.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"DAL",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Terence Steele",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22041.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"DET",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Jeff Okudah",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22044.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"MIN",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Cameron Dantzler",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22048.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NYG",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Darnay Holmes",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22050.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"DAL",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Trevon Diggs",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22051.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CAR",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"CJ Henderson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22052.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CHI",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Jaylon Johnson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22056.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"ARI",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Jeff Gladney",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22058.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"BUF",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Dane Jackson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22060.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"MIA",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Raekwon Davis",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22062.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"ATL",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"A.J. Terrell",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22075.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NYJ",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Bryce Hall",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22076.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"DAL",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Neville Gallimore",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22078.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CHI",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Kindle Vildor",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22079.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"TEN",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Kristian Fulton",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22084.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CAR",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Derrick Brown",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22085.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"WAS",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Chase Young",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22092.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"IND",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Julian Blackmon",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22109.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"PIT",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Kevin Dotson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22132.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NYG",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Tae Crowder",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22156.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CHI",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Ledarius Mack",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22161.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"GB",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Krys Barnes",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22266.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"TEN",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Aaron Brewer",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22419.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"TEN",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Teair Tart",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22422.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"JAX",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Trevor Lawrence",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22490.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"CHI",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Justin Fields",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22492.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NYJ",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Zach Wilson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22495.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NE",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Mac Jones",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22496.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"HOU",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Davis Mills",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22505.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"PIT",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Pat Freiermuth",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22507.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"ATL",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Kyle Pitts",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22508.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"SF",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Elijah Mitchell",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22535.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NE",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Rhamondre Stevenson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22546.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NYJ",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Michael Carter",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22553.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"WAS",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Jaret Patterson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22556.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"LAR",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Javian Hawkins",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22557.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DEN",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Javonte Williams",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22558.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"CHI",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Khalil Herbert",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22563.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"CIN",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Ja'Marr Chase",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22564.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DET",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Amon-Ra St. Brown",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/0.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NYJ",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Elijah Moore",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22592.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"MIA",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Jaylen Waddle",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22598.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NYG",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Kadarius Toney",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22614.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"BAL",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Rashod Bateman",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22623.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"ARI",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Rondale Moore",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22626.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"CIN",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Chris Evans",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22647.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"TEN",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Briley Moore",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22660.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"CAR",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Tommy Tremble",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22662.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NYG",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Gary Brightwell",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22672.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"IND",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Deon Jackson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22674.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"MIN",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Kene Nwangwu",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22676.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"CAR",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Terrace Marshall Jr.",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22685.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"LV",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Tre'Von Moehrig",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22688.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"IND",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Kwity Paye",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22689.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"LAC",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Rashawn Slater",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22690.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DET",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Penei Sewell",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22691.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DEN",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Pat Surtain II",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22692.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"TEN",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Caleb Farley",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22693.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"CAR",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Jaycee Horn",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22694.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DAL",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Micah Parsons",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22695.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"CLE",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Jeremiah Owusu-Koramoah",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22696.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"ARI",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Zaven Collins",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22697.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"BUF",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Greg Rousseau",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22698.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NO",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Paulson Adebo",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22704.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NE",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Christian Barmore",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22709.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"KC",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Nick Bolton",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22714.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"CHI",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Larry Borom",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22716.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"BUF",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Spencer Brown",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22725.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"SEA",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Tre Brown",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22726.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"MIN",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Camryn Bynum",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22729.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"JAX",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Tyson Campbell",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22731.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"CIN",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Jackson Carman",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22732.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NYJ",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Michael Carter II",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22735.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"ARI",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Marco Wilson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22739.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"WAS",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Sam Cosmi",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22747.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"MIN",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Christian Darrisaw",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22757.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"WAS",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Jamin Davis",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22759.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NYJ",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Alijah Vera-Tucker",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22766.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"LV",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Divine Deablo",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22767.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"PHI",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Landon Dickerson",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22769.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"CHI",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Khyiris Tonga",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22778.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"SF",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Ambry Thomas",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22782.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"GB",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Eric Stokes",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22786.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"KC",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Trey Smith",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22797.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"LAC",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Asante Samuel Jr.",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22807.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"MIA",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Liam Eichenberg",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22809.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"ATL",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Ta'Quon Graham",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22822.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"MIA",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Jevon Holland",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22841.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"KC",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Creed Humphrey",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22845.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"LAR",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Robert Rochell",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22848.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NYG",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Quincy Roche",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22850.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"LAR",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Ernest Jones",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22865.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NYG",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Azeez Ojulari",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22870.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"CLE",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Greg Newsome II",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22877.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"GB",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Royce Newman",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22878.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"GB",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Josh Myers",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22880.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"PIT",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Dan Moore Jr.",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22886.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"TEN",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Elijah Molden",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22887.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"ATL",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Jalen Mayfield",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22903.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DET",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Alim McNeill",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22906.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"LV",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Nate Hobbs",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22921.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"ATL",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Adetokunbo Ogundeji",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22924.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"HOU",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Roy Lopez",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22928.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"SEA",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Jon Rhattigan",
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22956.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2021
	}
]

export default players;