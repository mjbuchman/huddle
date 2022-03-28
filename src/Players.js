const players = [
	{
	   "Team":"IND",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Matt Ryan",
	   "Age":36,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/732.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2008
	},
	{
	   "Team":"GB",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Aaron Rodgers",
	   "Age":38,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/2593.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2005
	},
	{
	   "Team":"TB",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Tom Brady",
	   "Age":44,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/4314.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2000
	},
	{
	   "Team":"DEN",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Josh Johnson",
	   "Age":35,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/6489.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2008
	},
	{
	   "Team":"LAR",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"Eric Weddle",
	   "Age":37,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/7243.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2007
	},
	{
	   "Team":"SF",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Alex Mack",
	   "Age":36,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/8485.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2009
	},
	{
	   "Team":"LAR",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Matthew Stafford",
	   "Age":34,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/9038.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2009
	},
	{
	   "Team":"NO",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"Malcolm Jenkins",
	   "Age":34,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/9196.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2009
	},
	{
	   "Team":"NE",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"Devin McCourty",
	   "Age":34,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/10978.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2010
	},
	{
	   "Team":"PIT",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Joe Haden",
	   "Age":32,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/11043.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2010
	},
	{
	   "Team":"PIT",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Tyson Alualu",
	   "Age":34,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/11151.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2010
	},
	{
	   "Team":"PHI",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Brandon Graham",
	   "Age":33,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/11315.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2010
	},
	{
	   "Team":"BUF",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Rodger Saffold III",
	   "Age":33,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/11545.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2010
	},
	{
	   "Team":"SF",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Trent Williams",
	   "Age":33,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/12308.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2010
	},
	{
	   "Team":"SEA",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Al Woods",
	   "Age":35,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/12450.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2010
	},
	{
	   "Team":"PHI",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Jason Kelce",
	   "Age":34,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/12707.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2011
	},
	{
	   "Team":"NYG",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Tyrod Taylor",
	   "Age":32,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/12831.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2011
	},
	{
	   "Team":"TEN",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Buster Skrine",
	   "Age":32,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/12881.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2011
	},
	{
	   "Team":"PIT",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Cameron Heyward",
	   "Age":32,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/12902.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2011
	},
	{
	   "Team":"ARI",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"J.J. Watt",
	   "Age":33,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/12955.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2011
	},
	{
	   "Team":"BUF",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Von Miller",
	   "Age":33,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/13022.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2011
	},
	{
	   "Team":"ARI",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Rodney Hudson",
	   "Age":32,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/13037.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2011
	},
	{
	   "Team":"DAL",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Tyron Smith",
	   "Age":31,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/13129.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2011
	},
	{
	   "Team":"NO",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Cameron Jordan",
	   "Age":32,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/13338.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2011
	},
	{
	   "Team":"CHI",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Robert Quinn",
	   "Age":31,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/13393.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2011
	},
	{
	   "Team":"PHI",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Fletcher Cox",
	   "Age":31,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/13721.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2012
	},
	{
	   "Team":"LV",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Chandler Jones",
	   "Age":32,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/13749.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2012
	},
	{
	   "Team":"SF",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"Tavon Wilson",
	   "Age":32,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/13753.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2012
	},
	{
	   "Team":"TEN",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Ryan Tannehill",
	   "Age":33,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/13799.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2012
	},
	{
	   "Team":"NO",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Demario Davis",
	   "Age":33,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/13810.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2012
	},
	{
	   "Team":"BAL",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Kevin Zeitler",
	   "Age":32,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/13882.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2012
	},
	{
	   "Team":"ARI",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Kelvin Beachum",
	   "Age":32,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/13913.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2012
	},
	{
	   "Team":"TEN",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Ben Jones",
	   "Age":32,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/13969.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2012
	},
	{
	   "Team":"CAR",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Julian Stanford",
	   "Age":31,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14037.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2012
	},
	{
	   "Team":"BAL",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Derek Wolfe",
	   "Age":32,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14059.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2012
	},
	{
	   "Team":"ARI",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Jack Crawford",
	   "Age":33,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14096.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2012
	},
	{
	   "Team":"MIN",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Kirk Cousins",
	   "Age":33,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14252.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2012
	},
	{
	   "Team":"CIN",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Mike Daniels",
	   "Age":32,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14280.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2012
	},
	{
	   "Team":"ATL",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Casey Hayward Jr.",
	   "Age":32,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14285.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2012
	},
	{
	   "Team":"SF",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Josh Norman",
	   "Age":34,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14340.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2012
	},
	{
	   "Team":"TB",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Lavonte David",
	   "Age":32,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14375.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2012
	},
	{
	   "Team":"DET",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Michael Brockers",
	   "Age":31,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14397.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2012
	},
	{
	   "Team":"MIN",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"Harrison Smith",
	   "Age":33,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14461.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2012
	},
	{
	   "Team":"NE",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Justin Bethel",
	   "Age":31,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14469.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2012
	},
	{
	   "Team":"DEN",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Russell Wilson",
	   "Age":33,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14536.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2012
	},
	{
	   "Team":"CHI",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Bruce Irvin",
	   "Age":34,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14583.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2012
	},
	{
	   "Team":"KC",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Josh Gordon",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14587.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2012
	},
	{
	   "Team":"NE",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Lawrence Guy",
	   "Age":32,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14743.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2011
	},
	{
	   "Team":"DEN",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Tom Compton",
	   "Age":32,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14791.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2012
	},
	{
	   "Team":"ARI",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Zach Ertz",
	   "Age":31,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14856.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2013
	},
	{
	   "Team":"PHI",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Lane Johnson",
	   "Age":31,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14857.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2013
	},
	{
	   "Team":"BUF",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"Jordan Poyer",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14860.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2013
	},
	{
	   "Team":"TEN",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Robert Woods",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14871.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2013
	},
	{
	   "Team":"LV",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"Duron Harmon",
	   "Age":31,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14887.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2013
	},
	{
	   "Team":"TB",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Logan Ryan",
	   "Age":31,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14888.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2013
	},
	{
	   "Team":"TB",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Ryan Jensen",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14900.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2013
	},
	{
	   "Team":"PIT",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"John Simon",
	   "Age":31,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14904.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2013
	},
	{
	   "Team":"CLE",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Chris Hubbard",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14959.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2013
	},
	{
	   "Team":"ARI",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"DeAndre Hopkins",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14986.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2013
	},
	{
	   "Team":"TEN",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"David Quessenberry",
	   "Age":31,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14988.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2013
	},
	{
	   "Team":"IND",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"D.J. Swearinger",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/14989.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2013
	},
	{
	   "Team":"JAX",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Lerentee McCray",
	   "Age":31,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15029.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2013
	},
	{
	   "Team":"KC",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Travis Kelce",
	   "Age":32,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15048.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2013
	},
	{
	   "Team":"WAS",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"D.J. Hayden",
	   "Age":31,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15067.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2013
	},
	{
	   "Team":"LAC",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Keenan Allen",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15076.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2013
	},
	{
	   "Team":"CAR",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Damontre Moore",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15092.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2013
	},
	{
	   "Team":"ARI",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Justin Pugh",
	   "Age":31,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15094.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2013
	},
	{
	   "Team":"PHI",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Darius Slay",
	   "Age":31,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15127.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2013
	},
	{
	   "Team":"GB",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"David Bakhtiari",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15131.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2013
	},
	{
	   "Team":"BUF",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Micah Hyde",
	   "Age":31,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15136.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2013
	},
	{
	   "Team":"TB",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Kenjon Barner",
	   "Age":32,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15185.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2013
	},
	{
	   "Team":"MIA",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Terron Armstead",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15193.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2013
	},
	{
	   "Team":"DEN",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Akeem Spence",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15204.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2013
	},
	{
	   "Team":"NE",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"Cody Davis",
	   "Age":32,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15208.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2013
	},
	{
	   "Team":"JAX",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"Bradley McDougald",
	   "Age":31,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15302.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2013
	},
	{
	   "Team":"CAR",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Rashaan Melvin",
	   "Age":32,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15359.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2013
	},
	{
	   "Team":"DEN",
	   "Position":"NT",
	   "PositionCategory":"DEF",
	   "Name":"Mike Purcell",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15375.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2013
	},
	{
	   "Team":"NE",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"LaRoy Reynolds",
	   "Age":31,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15450.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2013
	},
	{
	   "Team":"BAL",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"Tony Jefferson II",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15516.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2013
	},
	{
	   "Team":"CIN",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"Michael Thomas",
	   "Age":32,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15589.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2012
	},
	{
	   "Team":"TB",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Ross Cockrell",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/15988.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"BAL",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Ja'Wuan James",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16015.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"WAS",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Tyler Larsen",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16021.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"DEN",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Billy Turner",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16029.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"NE",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Malcolm Butler",
	   "Age":32,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16035.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"SF",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Jon Halapio",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16044.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"CHI",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Dakota Dozier",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16061.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"SF",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Kerry Hyder Jr.",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16067.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"HOU",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Terrence Brooks",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16078.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"NO",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"James Hurst",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16086.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"NYJ",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"C.J. Mosley",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16093.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"SF",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Darqueze Dennard",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16107.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"CLE",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Joel Bitonio",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16125.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"HOU",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Christian Kirksey",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16133.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"DEN",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"K'Waun Williams",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16143.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"PIT",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Stephon Tuitt",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16159.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"BUF",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"DaQuan Jones",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16171.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"TEN",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Taylor Lewan",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16172.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"HOU",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Justin McCray",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16173.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"LAC",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Matt Feiler",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16198.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"NE",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"James Ferentz",
	   "Age":32,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16199.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"CIN",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Xavier Su'a-Filo",
	   "Age":31,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16212.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"CIN",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Zach Kerr",
	   "Age":31,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16226.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"JAX",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Brandon Linder",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16259.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"LAR",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Allen Robinson II",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16263.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"TB",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Shaquil Barrett",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16271.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"NO",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Bradley Roby",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16283.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"SF",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Dee Ford",
	   "Age":31,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16294.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"TEN",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Denico Autry",
	   "Age":31,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16310.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"LV",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Derek Carr",
	   "Age":31,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16311.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"NYG",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Justin Ellis",
	   "Age":31,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16315.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"SEA",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Shelby Harris",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16319.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"SEA",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Gabe Jackson",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16320.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"LAC",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Khalil Mack",
	   "Age":31,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16323.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"CHI",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Jeremiah Attaochu",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16334.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"DAL",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"DeMarcus Lawrence",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16366.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"DAL",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Zack Martin",
	   "Age":31,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16369.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"NE",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Terrance Mitchell",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16370.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"ARI",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Devon Kennard",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16397.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"BAL",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Morgan Moses",
	   "Age":31,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16419.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"WAS",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Charles Leno Jr.",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16436.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"WAS",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Cornelius Lucas",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16458.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"LAC",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Caraun Reid",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16463.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"LV",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Davante Adams",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16470.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"DEN",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"Ha Ha Clinton-Dix",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16473.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"LAC",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Corey Linsley",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16481.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"CHI",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Joe Thomas",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16492.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"MIA",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Teddy Bridgewater",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16497.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"ATL",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Jake Matthews",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16531.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"WAS",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Andrew Norwell",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16560.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"HOU",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Brandin Cooks",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16568.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"TB",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Mike Evans",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16597.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"LAR",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Aaron Donald",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16618.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"NYJ",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"Lamarcus Joyner",
	   "Age":31,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16625.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"NO",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Ethan Westbrooks",
	   "Age":31,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16637.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"WAS",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Logan Thomas",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16656.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"SF",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Dontae Johnson",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16669.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"SF",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"Jimmie Ward",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16678.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"HOU",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Justin Britt",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16681.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"HOU",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Kevin Pierre-Louis",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16690.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"NE",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"Adrian Phillips",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16724.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2014
	},
	{
	   "Team":"NO",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Jameis Winston",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16762.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"DAL",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Dante Fowler Jr.",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16764.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"JAX",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Brandon Scherff",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16766.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"NYG",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Leonard Williams",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16767.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"NO",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Andrus Peat",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16774.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"SF",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Arik Armstead",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16778.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"BAL",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Marcus Peters",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16779.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"CAR",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Cameron Erving",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16780.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"HOU",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Cedric Ogbuehi",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16782.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"TEN",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Bud Dupree",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16783.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"ARI",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"D.J. Humphries",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16785.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"CAR",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Shaq Thompson",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16786.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"MIA",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Byron Jones",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16788.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"NYJ",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Laken Tomlinson",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16789.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"JAX",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Malcom Brown",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16793.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"TB",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Donovan Smith",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16795.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"CHI",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Mario Edwards Jr.",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16796.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"GB",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Preston Smith",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16799.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"MIN",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Eric Kendricks",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16806.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"MIA",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"Eric Rowe",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16808.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"LV",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Denzel Perryman",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16809.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"BUF",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Mitch Morse",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16810.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"DEN",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Ronald Darby",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16811.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"BUF",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Jordan Phillips",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16813.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"LAR",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Rob Havenstein",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16818.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"ARI",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Markus Golden",
	   "Age":31,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16819.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"DEN",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Randy Gregory",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16821.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"KC",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Frank Clark",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16824.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"BAL",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"Jordan Richards",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16825.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"HOU",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"A.J. Cann",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16828.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"LV",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Hroniss Grasu",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16832.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"MIN",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Jordan Hicks",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16845.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"MIN",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Danielle Hunter",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16849.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"PIT",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Chaz Green",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16852.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"NE",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Henry Anderson",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16854.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"CHI",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Angelo Blackson",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16861.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"WAS",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Gabe Wright",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16874.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"NYG",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Jamil Douglas",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16875.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"IND",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"Ibraheim Campbell",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16876.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"MIN",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Za'Darius Smith",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16883.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"ATL",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Mike Davis",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16887.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"CAR",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Damien Wilson",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16888.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"NYG",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Jon Feliciano",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16889.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"TB",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Shaq Mason",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16892.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"NYG",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Mark Glowinski",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16895.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"GB",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"Adrian Amos",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16902.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"WAS",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Bobby McCain",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16905.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"BUF",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Stefon Diggs",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16906.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"ATL",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Tyeler Davison",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16914.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"NYJ",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"C.J. Uzomah",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16917.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"WAS",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"David Mayo",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16929.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"MIN",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Tye Smith",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16930.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"SEA",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"Quandre Diggs",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16960.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"LV",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Darren Waller",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16964.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"LAC",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Christian Covington",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16976.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"KC",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Austin Reiter",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16981.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"SEA",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Edmond Robinson",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16991.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"SF",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Mark Nzeocha",
	   "Age":32,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16995.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"NE",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Trent Brown",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17003.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"LV",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Denzelle Good",
	   "Age":31,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17014.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"SEA",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Justin Coleman",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17037.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"CIN",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"La'el Collins",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17058.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"ATL",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Grady Jarrett",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17059.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"MIN",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"T.Y. McGill",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17082.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"DEN",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Alex Singleton",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17085.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"PHI",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"Anthony Harris",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17187.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"MIA",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Raheem Mostert",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17217.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"ATL",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"James Vaughters",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17246.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"WAS",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Efe Obada",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17264.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"CLE",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Troy Hill",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17294.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"DEN",
	   "Position":"NT",
	   "PositionCategory":"DEF",
	   "Name":"DeShawn Williams",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17295.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"LV",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Justin March-Lillard",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17307.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"HOU",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Josh Watson",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17362.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NE",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"David Andrews",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17443.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"BUF",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Greg Mancz",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17491.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"TEN",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Daniel Munyer",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17511.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"TB",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Rakeem Nunez-Roches",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17512.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"NE",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"De'Vante Bausby",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17651.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2015
	},
	{
	   "Team":"BAL",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Brandon Stephens",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17691.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"ATL",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"Erik Harris",
	   "Age":31,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17899.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"LAC",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Joey Bosa",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17915.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"HOU",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Laremy Tunsil",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17918.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"LAR",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Jalen Ramsey",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17919.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"WAS",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Carson Wentz",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17920.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"BAL",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Ronnie Stanley",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17921.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"DET",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Jared Goff",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17922.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"DAL",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Ezekiel Elliott",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17923.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"PIT",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Myles Jack",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17925.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"IND",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"DeForest Buckner",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17933.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"LAR",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Leonard Floyd",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17935.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"CLE",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Jack Conklin",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17936.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"KC",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Corey Coleman",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17938.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"BUF",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Shaq Lawson",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17943.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"LV",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Vernon Butler",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17944.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"WAS",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"William Jackson III",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17945.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"DET",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Taylor Decker",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17946.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"GB",
	   "Position":"NT",
	   "PositionCategory":"DEF",
	   "Name":"Kenny Clark",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17947.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"IND",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Ryan Kelly",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17948.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"NYJ",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Sheldon Rankins",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17949.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"CIN",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Eli Apple",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17950.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"PIT",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"Karl Joseph",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17952.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"SEA",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Artie Burns",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17953.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"CIN",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Noah Spence",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17956.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"MIA",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Emmanuel Ogbah",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17958.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"TEN",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Derrick Henry",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17959.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"TEN",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Austin Hooper",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17963.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"LV",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Andrew Billings",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17968.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"MIA",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Xavien Howard",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17976.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"NYG",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Jihad Ward",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17978.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"LAR",
	   "Position":"NT",
	   "PositionCategory":"DEF",
	   "Name":"A'Shawn Robinson",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17979.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"GB",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Jarran Reed",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17981.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"ATL",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Deion Jones",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17983.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"CHI",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Cody Whitehair",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17987.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"NE",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"Sean Davis",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17989.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"CIN",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"Vonn Bell",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17991.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"NYG",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"James Bradberry",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17992.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"TEN",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"Kevin Byard",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17994.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"HOU",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Maliek Collins",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17997.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"IND",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"Will Redmond",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17998.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"IND",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Yannick Ngakoue",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17999.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"GB",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Bronson Kaufusi",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18000.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"NO",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"KeiVarae Russell",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18004.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"IND",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Shon Coleman",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18006.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"BAL",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Daryl Worley",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18007.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"KC",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Joe Thuney",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18008.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"PHI",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Isaac Seumalo",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18009.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"PHI",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Le'Raven Clark",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18011.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"HOU",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Jordan Jenkins",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18012.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"WAS",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Kendall Fuller",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18013.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"ARI",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Nick Vigil",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18015.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"LV",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Kyler Fackrell",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18016.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"PHI",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Javon Hargrave",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18017.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"DEN",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Graham Glasgow",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18020.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"DEN",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"Justin Simmons",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18023.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"BAL",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Tavon Young",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18027.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"HOU",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"Eric Murray",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18029.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"LAR",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Tyler Higbee",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18032.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"PIT",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Miles Killebrew",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18033.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"GB",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"De'Vondre Campbell",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18037.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"SF",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Hassan Ridgeway",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18038.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"CAR",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"Juston Burris",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18040.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"NO",
	   "Position":"NT",
	   "PositionCategory":"DEF",
	   "Name":"David Onyemata",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18042.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"ATL",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Willie Beavers",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18043.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"NO",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Jerald Hawkins",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18044.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"KC",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"Deon Bush",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18045.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"NYG",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Blake Martinez",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18052.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"DAL",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Dak Prescott",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18055.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"GB",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Dean Lowry",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18056.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"NYJ",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Ronald Blair",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18060.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"NYJ",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Connor McGovern",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18062.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"NE",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Matthew Judon",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18064.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"SEA",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Quinton Jefferson",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18065.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"CAR",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Matt Ioannidis",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18069.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"WAS",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Wendell Smallwood",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18070.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"PIT",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Joe Haeg",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18072.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"TEN",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Kevin Hogan",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18079.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"DET",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Halapoulivaati Vaitai",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18081.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"MIA",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Tyreek Hill",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18082.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"CIN",
	   "Position":"NT",
	   "PositionCategory":"DEF",
	   "Name":"D.J. Reader",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18083.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"DAL",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Devante Bond",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18100.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"CHI",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"DeAndre Houston-Carson",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18102.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"DAL",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Anthony Brown",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18106.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"WAS",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Wes Schweitzer",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18112.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"LAR",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"Blake Countess",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18113.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"MIA",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Cody Core",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18116.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"HOU",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Kamu Grugier-Hill",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18124.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"MIA",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Elandon Roberts",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18130.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"NYJ",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"Will Parks",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18134.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"BAL",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Kevon Seymour",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18135.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"CIN",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Ted Karras",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18137.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"KC",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Jonathan Woodard",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18142.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"NE",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Jalen Mills",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18149.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"DAL",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"Jayron Kearse",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18160.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"MIA",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"Clayton Fejedelem",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18161.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"BUF",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Tyler Matakevich",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18162.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"SEA",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Austin Blythe",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18164.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"ARI",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Joe Walker",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18167.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"NE",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Jonathan Jones",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18177.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"BUF",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Justin Zimmer",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18237.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"TEN",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Briean Boddy-Calhoun",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18239.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"DET",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Romeo Okwara",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18268.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"ARI",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Marcus Henry",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18274.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"JAX",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Roy Robertson-Harris",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18292.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"MIA",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Spencer Pulley",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18312.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"CIN",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Mike Hilton",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18316.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"SF",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"Jarrod Wilson",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18321.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"KC",
	   "Position":"NT",
	   "PositionCategory":"DEF",
	   "Name":"Chris Jones",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18331.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"LAC",
	   "Position":"NT",
	   "PositionCategory":"DEF",
	   "Name":"Austin Johnson",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18333.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"WAS",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Marken Michel",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18343.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"MIA",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Chris Milton",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18369.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"BAL",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Adam Redmond",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18370.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"ARI",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Justin Murray",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18416.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"LV",
	   "Position":"NT",
	   "PositionCategory":"DEF",
	   "Name":"Kyle Peko",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18421.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"MIN",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Eddie Yarbrough",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18426.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"LAR",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"Sharrod Neasman",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18467.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"NYJ",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Joshua Perkins",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18468.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"IND",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Brian Poole",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18469.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"BAL",
	   "Position":"NT",
	   "PositionCategory":"DEF",
	   "Name":"Michael Pierce",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18481.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"NE",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Alex Redmond",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18494.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"MIA",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Brennan Scarlett",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18545.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"CAR",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Cory Littleton",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18559.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"ATL",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Lafayette Pitts",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18573.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"NYG",
	   "Position":"NT",
	   "PositionCategory":"DEF",
	   "Name":"Woodrow Hamilton IV",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18575.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"TB",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"Andrew Adams",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18576.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"BUF",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Brandin Bryant",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18598.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"NYJ",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"George Fant",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18599.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"ARI",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Alex Ellis",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18642.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"CHI",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Lucas Patrick",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18710.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"NYJ",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Isaiah Williams",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18761.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2016
	},
	{
	   "Team":"CLE",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Myles Garrett",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18807.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"CIN",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Joe Mixon",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18858.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"MIN",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Dalvin Cook",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18872.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"WAS",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Jonathan Allen",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18875.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"CAR",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Christian McCaffrey",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18877.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"NO",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Alvin Kamara",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18878.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"NYJ",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Corey Davis",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18879.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"KC",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Patrick Mahomes",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18890.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"DEN",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Garett Bolles",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18899.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"IND",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Mo Alie-Cox",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18900.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"NO",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Marshon Lattimore",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18905.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"PHI",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Haason Reddick",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18909.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"JAX",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Cam Robinson",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18910.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"PHI",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Derek Barnett",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18911.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"JAX",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Evan Engram",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18912.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"PIT",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"T.J. Watt",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18916.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"BAL",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Marlon Humphrey",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18917.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"BUF",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Tre'Davious White",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18918.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"DAL",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"Malik Hooker",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18920.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"DET",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Charles Harris",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18921.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"NO",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Ryan Ramczyk",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18922.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"SEA",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"Jamal Adams",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18923.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"NYG",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Adoree' Jackson",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18924.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"ARI",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"Budda Baker",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18927.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"SEA",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Sidney Jones IV",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18929.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"BAL",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Tyus Bowser",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18930.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"ATL",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Teez Tabor",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18933.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"MIA",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Quincy Wilson",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18934.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"LAC",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Gerald Everett",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18935.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"NE",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Raekwon McMillan",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18936.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"BAL",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"Marcus Williams",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18937.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"MIN",
	   "Position":"NT",
	   "PositionCategory":"DEF",
	   "Name":"Dalvin Tomlinson",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18938.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"NO",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"Marcus Maye",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18939.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"NO",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Forrest Lamp",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18940.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"CLE",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Malik McDowell",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18941.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"MIA",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Duke Riley",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18945.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"PIT",
	   "Position":"NT",
	   "PositionCategory":"DEF",
	   "Name":"Chris Wormley",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18947.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"BUF",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Dion Dawkins",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18948.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"MIA",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Daeshon Hall",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18949.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"CAR",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Taylor Moton",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18950.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"SF",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Jordan Willis",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18951.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"CIN",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Chidobe Awuzie",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18953.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"SEA",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"Josh Jones",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18955.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"TEN",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Zach Cunningham",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18956.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"DAL",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Tarell Basham",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18958.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"JAX",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Dawuane Smoot",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18959.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"NO",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Tanoh Kpassagnon",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18960.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"CAR",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Pat Elflein",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18961.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"HOU",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Derek Rivers",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18963.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"NYJ",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Dan Feeney",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18968.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"PIT",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Ahkello Witherspoon",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18970.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"DAL",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Jourdan Lewis",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18975.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"NYG",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Kenny Golladay",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18977.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"PIT",
	   "Position":"NT",
	   "PositionCategory":"DEF",
	   "Name":"Montravius Adams",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18978.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"CLE",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"John Johnson III",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18979.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"CIN",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Trey Hendrickson",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18981.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"GB",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Rasul Douglas",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18982.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"PIT",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Cameron Sutton",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18984.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"JAX",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Shaquill Griffin",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18986.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"NE",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Jonnu Smith",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18990.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"NYJ",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Carl Lawson",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/18994.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"ARI",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Sean Harlow",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19001.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"CHI",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"Eddie Jackson",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19004.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"HOU",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Jalen Reeves-Maybin",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19009.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"DAL",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Carlos Watkins",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19012.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"IND",
	   "Position":"NT",
	   "PositionCategory":"DEF",
	   "Name":"Grover Stewart",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19014.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"SF",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Samson Ebukam",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19016.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"NE",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Deatrich Wise Jr.",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19020.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"JAX",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"Rayshawn Jenkins",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19026.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"CLE",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"Tedric Thompson",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19027.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"DET",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Will Holden",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19031.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"BUF",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Matt Milano",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19037.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"KC",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Roderick Johnson",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19042.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"GB",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Aaron Jones",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19045.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"CLE",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Anthony Walker",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19049.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"NE",
	   "Position":"NT",
	   "PositionCategory":"DEF",
	   "Name":"Davon Godchaux",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19053.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"NYJ",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Rodney Adams",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19054.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"ARI",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Danny Isidora",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19055.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"BUF",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Marquel Lee",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19058.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"CLE",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Brian Allen",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19061.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"HOU",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"Desmond King II",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19062.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"SF",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"George Kittle",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19063.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"LV",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Jayon Brown",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19066.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"JAX",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"Rudy Ford",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19069.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"BAL",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"Chuck Clark",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19070.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"ARI",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Tanner Vallejo",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19071.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"CIN",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"Brandon Wilson",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19076.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"CAR",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"Xavier Woods",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19084.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"JAX",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Jeremiah Ledbetter",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19086.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"TB",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Patrick O'Connor",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19087.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"SEA",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Kyle Fuller",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19091.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"NYJ",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Tanzel Smart",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19097.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"KC",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Elijah Lee",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19101.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"CLE",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Ifeadi Odenigbo",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19102.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"CHI",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Al-Quadin Muhammad",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19105.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"SEA",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Chris Carson",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19119.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"CLE",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"Adrian Colbert",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19123.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"DEN",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Pita Taumoepenu",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19125.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"TEN",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Corey Levin",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19128.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"WAS",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Chase Roullier",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19134.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"SF",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Daniel Brunskill",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19139.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"CIN",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Josh Tupou",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19228.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"MIA",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Adam Pankey",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19240.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"PHI",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Cameron Malveaux",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19252.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"ARI",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Eric Smith",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19258.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"DAL",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Aviante Collins",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19263.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"MIA",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Adam Butler",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19275.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"NE",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Harvey Langi",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19286.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"IND",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Kenny Moore II",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19287.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"CIN",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Austin Calitro",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19293.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"CHI",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Nicholas Morrow",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19310.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"PIT",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Arthur Maulet",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19375.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"MIA",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Cameron Tom",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19377.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"DEN",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Ben Braden",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19379.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"BUF",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Tanner Gentry",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19431.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"NYJ",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"Kai Nacua",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19448.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"ATL",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Elijah Wilkinson",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19479.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"SF",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Alex Barrett",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19481.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"LAC",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Storm Norton",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19486.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"GB",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Robert Tonyan",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19491.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"BUF",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Eli Ankou",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19493.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"TEN",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Dylan Cole",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19496.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"NYJ",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Justin Hardee",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19501.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"MIA",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Calvin Munson",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19538.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"MIA",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Jamal Perry",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19557.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"LAC",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Michael Davis",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19560.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"LAC",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Austin Ekeler",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19562.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"TEN",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Jordan Roos",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19578.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"TEN",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Jamal Carter",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19591.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"KC",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Andrew Wylie",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19596.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"DET",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Dan Skipper",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19624.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"JAX",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Dan Arnold",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19659.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"CLE",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Michael Dunn",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19672.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"NYJ",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Greg Van Roten",
	   "Age":32,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19690.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2012
	},
	{
	   "Team":"PIT",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Christian Kuntz",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19749.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"WAS",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Jon Toth",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19760.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2017
	},
	{
	   "Team":"NYG",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Saquon Barkley",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19766.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"BAL",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Lamar Jackson",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19781.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"CLE",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Baker Mayfield",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19790.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"CLE",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Nick Chubb",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19798.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"BUF",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Josh Allen",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19801.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"ATL",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Calvin Ridley",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19802.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"BAL",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Mark Andrews",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19803.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"CAR",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Sam Darnold",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19812.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"KC",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Orlando Brown",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19814.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"DET",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"DJ Chark Jr.",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19816.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"CHI",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Roquan Smith",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19827.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"PIT",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"Minkah Fitzpatrick",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19829.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"CLE",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Denzel Ward",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19830.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"IND",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Quenton Nelson",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19831.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"DEN",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Bradley Chubb",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19832.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"SF",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Mike McGlinchey",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19833.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"TB",
	   "Position":"NT",
	   "PositionCategory":"DEF",
	   "Name":"Vita Vea",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19834.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"NO",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Marcus Davenport",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19835.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"BUF",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Tremaine Edmunds",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19836.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"LAC",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"Derwin James Jr.",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19837.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"DAL",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Leighton Vander Esch",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19838.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"GB",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Jaire Alexander",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19839.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"LV",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Kolton Miller",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19840.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"WAS",
	   "Position":"NT",
	   "PositionCategory":"DEF",
	   "Name":"Daron Payne",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19841.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"CAR",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"DJ Moore",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19844.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"DET",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Frank Ragnow",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19845.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"CLE",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Taven Bryan",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19846.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"DET",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Mike Hughes",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19847.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"NE",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Isaiah Wynn",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19848.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"PIT",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Mason Rudolph",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19850.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"CAR",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Austin Corbett",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19851.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"IND",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Darius Leonard",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19852.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"MIA",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Mike Gesicki",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19853.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"PIT",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"James Daniels",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19855.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"IND",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Braden Smith",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19857.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"IND",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Uchenna Nwosu",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19859.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"PHI",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Dallas Goedert",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19863.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"KC",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"Justin Reid",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19866.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"ATL",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Isaiah Oliver",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19868.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"CAR",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Donte Jackson",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19870.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"CIN",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Sam Hubbard",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19871.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"IND",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Malik Jefferson",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19872.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"CIN",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"Jessie Bates III",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19873.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"MIA",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Connor Williams",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19875.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"DET",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"Tracy Walker III",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19876.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"IND",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Tyquan Lewis",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19878.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"KC",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Derrick Nnadi",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19880.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"CHI",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Justin Jones",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19881.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"MIA",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Jerome Baker",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19882.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"MIN",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Brian O'Neill",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19883.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"CIN",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"B.J. Hill",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19885.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"ATL",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Lorenzo Carter",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19886.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"NYJ",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Nathan Shepherd",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19887.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"LV",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Brandon Parker",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19888.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"SF",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Fred Warner",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19891.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"TB",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Carlton Davis III",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19892.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"HOU",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"M.J. Stewart Jr.",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19893.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"KC",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Geron Christian Sr.",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19894.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"LAR",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Joe Noteboom",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19895.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"LV",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Arden Key",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19896.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"PIT",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Mason Cole",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19898.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"MIN",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Harrison Phillips",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19900.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"HOU",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Isaac Yiadom",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19901.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"SF",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Oren Burks",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19902.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"CLE",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"Ronnie Harrison Jr.",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19904.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"PIT",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Chukwuma Okorafor",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19906.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"CIN",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Alex Cappa",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19908.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"PHI",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Josh Sweat",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19918.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"MIA",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Chase Edmonds",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19919.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"LV",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Anthony Averett",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19927.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"BUF",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Taron Johnson",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19928.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"CAR",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Marquis Haynes Sr.",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19929.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"LV",
	   "Position":"NT",
	   "PositionCategory":"DEF",
	   "Name":"Bilal Nichols",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19930.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"SEA",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Joel Iyiegbuniwe",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19931.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"DAL",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Dorance Armstrong",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19932.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"DEN",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Josey Jewell",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19933.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"TEN",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Da'Shawn Hand",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19934.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"JAX",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Will Richardson Jr.",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19938.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"LAR",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Brian Allen",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19941.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"NYJ",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"John Franklin-Myers",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19942.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"NE",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Ja'Whaun Bentley",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19944.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"ATL",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Rick Leonard",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19945.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"IND",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"R.J. McIntosh",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19946.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"IND",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Nick Nelson",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19948.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"PHI",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Avonte Maddox",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19949.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"NO",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Kentavius Street",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19952.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"NYJ",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"D.J. Reed",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19953.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"NYJ",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"Jordan Whitehead",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19954.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"WAS",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"Troy Apke",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19955.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"CLE",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Wyatt Teller",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19962.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"ARI",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Kylie Fitts",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19965.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"LAC",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Andrew Brown",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19966.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"LV",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Darius Phillips",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19968.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"HOU",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Scott Quessenberry",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19983.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"LAR",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Jamil Demby",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19984.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"LAC",
	   "Position":"NT",
	   "PositionCategory":"DEF",
	   "Name":"Sebastian Joseph-Day",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19985.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"LV",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Micah Kiser",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19986.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"HOU",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Ogbonnia Okoronkwo",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19987.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"NYJ",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Tyler Conklin",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19988.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"LV",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"Natrell Jamerson",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19992.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"JAX",
	   "Position":"NT",
	   "PositionCategory":"DEF",
	   "Name":"Folorunso Fatukasi",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19993.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"MIN",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Parry Nickerson",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19994.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"PIT",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Marcus Allen",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19997.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"TEN",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Jamarco Jones",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19998.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"NYJ",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Jacob Martin",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19999.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"BUF",
	   "Position":"NT",
	   "PositionCategory":"DEF",
	   "Name":"Tim Settle",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20002.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"JAX",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Foyesade Oluokun",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20007.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"CAR",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Bradley Bozeman",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20008.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"BUF",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Andre Smith",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20010.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"GB",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Peter Kalambayi",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20021.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"IND",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Zaire Franklin",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20024.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"BAL",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Kahlil McKenzie",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20027.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"LAR",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Travin Howard",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20030.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"ATL",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Cornell Armstrong",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20032.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"ATL",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Colby Gossett",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20034.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"PHI",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Jordan Mailata",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20042.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"IND",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Matt Pryor",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20043.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"NYG",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Korey Cunningham",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20047.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"KC",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"Chris Lammons",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20050.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"MIA",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Zach Sieler",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20051.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"NYG",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Austin Proehl",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20052.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"CLE",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Montrel Meander",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20059.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"IND",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Tony Brown",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20066.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"LAR",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Justin Lawler",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20068.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"MIA",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Keion Crossen",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20070.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"DET",
	   "Position":"FB",
	   "PositionCategory":"OFF",
	   "Name":"Jason Cabinda",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20074.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"ARI",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Dennis Gardeck",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20085.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"ARI",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Ezekiel Turner",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20088.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"NYG",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Matt Gono",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20093.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"PIT",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Levi Wallace",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20102.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"WAS",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Bunmi Rotimi",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20108.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"BAL",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Kevin Toliver II",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20111.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"CIN",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"Trayvon Henderson",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20116.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"BAL",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Jaryd Jones-Smith",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20137.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"PIT",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Tegray Scales",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20155.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"CIN",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Jalen Davis",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20157.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"LAC",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"J.C. Jackson",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20167.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"IND",
	   "Position":"NT",
	   "PositionCategory":"DEF",
	   "Name":"Taylor Stallworth",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20169.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"CAR",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"Sean Chandler",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20173.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"SEA",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Poona Ford",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20185.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"HOU",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Demone Harris",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20189.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"NO",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Ethan Wolf",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20193.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"ARI",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"David Wells",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20199.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"SF",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Charvarius Ward",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20204.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"HOU",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Tavierre Thomas",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20217.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"HOU",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"Jonathan Owens",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20219.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"PIT",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"J.C. Hassenauer",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20231.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"CAR",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Jacob Tuioti-Mariner",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20233.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"BAL",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Gus Edwards",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20239.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"DET",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Chris Board",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20245.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"BUF",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Mike Love",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20253.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"CHI",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Michael Joseph",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20262.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"TEN",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Christian DiLauro",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20268.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"NE",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Daniel Ekuale",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20269.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"MIA",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"Elijah Campbell",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20271.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"BAL",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Robert Jackson",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20300.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"TB",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"Chris Cooper",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20302.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"NYG",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"Steven Parker",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20316.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"WAS",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"David Steinmetz",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20320.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"CAR",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Frank Herron",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20331.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"PIT",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Linden Stephens",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20335.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"NYG",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Nick Gates",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20337.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"LAR",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Grant Haley",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20339.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"LV",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Kendal Vickers",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20346.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"SF",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Emmanuel Moseley",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20366.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"HOU",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Jordan Veasy",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20376.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"CLE",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Elijah Nkansah",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20378.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"TB",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Aaron Stinnie",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20379.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"NO",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Sharif Finch",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20382.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"NYG",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"Joshua Kalu",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20384.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"MIN",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Timon Parris",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20392.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"WAS",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Danny Johnson",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20395.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"LAC",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"Trey Marshall",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20418.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"IND",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Skai Moore",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20428.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"TB",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Dee Delaney",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20429.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"IND",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Brandon Facyson",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20434.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"GB",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Abdullah Anderson",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20450.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"JAX",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"KC McDermott",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20457.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"JAX",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Tre Herndon",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20460.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"SEA",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Niles Scott",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20469.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"MIN",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Austin Schlottmann",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20482.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"CAR",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Austin Larkin",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20488.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"SF",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"George Odum",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20492.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"LAC",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Ryan Hunter",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20499.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"BAL",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Jimmy Murray",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20502.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"TEN",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"A.J. Moore Jr.",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20513.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"NYG",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Trent Harris",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20516.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"PIT",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Henry Mondeaux",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20520.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"LAR",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Jeremiah Kolone",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20527.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"LAR",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Coleman Shelton",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20533.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"SEA",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"Ryan Neal",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20538.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"DET",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Bruce Hector",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20541.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"DET",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Evan Brown",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20554.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"SEA",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Dakoda Shepley",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20556.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"NO",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"J.T. Gray",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20559.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"JAX",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Darious Williams",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20570.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"CLE",
	   "Position":"FB",
	   "PositionCategory":"OFF",
	   "Name":"Johnny Stanton",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20581.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"PHI",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Craig James",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20584.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"PHI",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Andre Chachere",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20604.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"WAS",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"Jeremy Reaves",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20611.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"ATL",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Nick Thurman",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20637.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"LV",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"Dallin Leavitt",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20642.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"PIT",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Robert Spillane",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20646.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"DET",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Josh Woods",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20664.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"TEN",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Chris Jones",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20711.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2018
	},
	{
	   "Team":"SF",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Nick Bosa",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20713.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LAC",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Tevaughn Campbell",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20721.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"MIA",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Sam Eguavoen",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20724.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"ARI",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"Deionte Thompson",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20729.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LV",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"Johnathan Abram",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20731.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LAC",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"Nasir Adderley",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20733.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"JAX",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Dakota Allen",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20736.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"JAX",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Josh Allen",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20737.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"ARI",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Zach Allen",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20738.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"SEA",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Blessuan Austin",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20744.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NYJ",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Chuma Edoga",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20746.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LAR",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"David Edwards",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20747.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"TB",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"Mike Edwards",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20748.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"PHI",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"T.J. Edwards",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20749.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LAC",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Emeke Egbule",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20750.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LAR",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Bobby Evans",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20752.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"SEA",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Noah Fant",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20753.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"KC",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Rashad Fenton",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20754.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"BAL",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Jaylon Ferguson",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20755.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LV",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Clelin Ferrell",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20757.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"BUF",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Cody Ford",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20760.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"CIN",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Lamont Gaillard",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20763.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LAR",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Greg Gaines",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20764.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NO",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"C.J. Gardner-Johnson",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20766.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"GB",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Rashan Gary",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20767.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"MIA",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Myles Gaskin",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20768.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"PIT",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Ulysees Gilbert III",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20771.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"BUF",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Joe Giles-Harris",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20772.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"SF",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Kevin Givens",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20773.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NO",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Carl Granderson",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20776.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"TEN",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Derwin Gray",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20777.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"SF",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Dre Greenlaw",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20778.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"CLE",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Porter Gustin",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20780.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"TEN",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Nate Hall",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20783.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NE",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Terez Hall",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20784.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NYJ",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"Saquan Hampton",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20785.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NO",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Chase Hansen",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20787.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NE",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Damien Harris",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20790.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"DET",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"Will Harris",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20791.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"SEA",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Phil Haynes",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20796.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LAR",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Darrell Henderson Jr.",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20798.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"PHI",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Nate Herbig",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20799.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"DAL",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Trysten Hill",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20803.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"DET",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"T.J. Hockenson",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20805.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LAR",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Justin Hollins",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20808.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"TEN",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"Amani Hooker",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20811.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"HOU",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Tytus Howard",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20813.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NO",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Albert Huggins",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20815.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"DAL",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Mitch Hyatt",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20818.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"CAR",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Joe Jackson",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20821.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"SEA",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Michael Jackson Sr.",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20822.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LV",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Josh Jacobs",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20824.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LV",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Andre James",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20825.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"WAS",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Jalen Jelks",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20827.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"GB",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Elgton Jenkins",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20828.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"BUF",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"Jaquan Johnson",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20834.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"CAR",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Darryl Johnson",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20839.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"HOU",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Lonnie Johnson Jr.",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20840.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NYG",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Daniel Jones",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20841.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"DEN",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Dre'Mont Jones",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20842.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"CAR",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Michael Jordan",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20844.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"HOU",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Kingsley Keke",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20848.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"BUF",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Dawson Knox",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20850.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NYG",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Dexter Lawrence",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20852.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"PIT",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Justin Layne",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20853.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"ATL",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Chris Lindstrom",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20857.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"MIA",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Greg Little",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20858.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LAR",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"David Long Jr.",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20861.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"TEN",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"David Long Jr.",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20862.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NYG",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"Julian Love",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20864.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"BAL",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Iman Marshall",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20867.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NO",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Erik McCoy",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20869.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"ATL",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Kaleb McGary",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20870.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"DAL",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Connor McGovern",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20871.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"WAS",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Terry McLaurin",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20873.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"SEA",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"DK Metcalf",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20875.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NE",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Jakobi Meyers",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20876.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NO",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Jordan Miller",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20878.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"CHI",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"David Montgomery",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20882.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"HOU",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Jimmy Moreland",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20885.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LV",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Trayvon Mullen Jr.",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20887.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"ARI",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Byron Murphy Jr.",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20888.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"ARI",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Kyler Murray",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20889.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"CHI",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Sam Mustipher",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20891.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"TB",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Anthony Nelson",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20894.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"GB",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Yosh Nijman",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20895.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"IND",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Bobby Okereke",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20897.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"BUF",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Ed Oliver",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20898.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"SF",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Charles Omenihu",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20901.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"PHI",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Sua Opeta",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20902.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"DET",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Amani Oruwariye",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20903.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NYJ",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Ross Pierschbacher",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20910.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"BAL",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Ben Powers",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20914.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"CIN",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Germaine Pratt",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20915.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"CIN",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Isaiah Prince",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20917.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LAR",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"Taylor Rapp",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20919.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"CIN",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Wyatt Ray",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20921.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"MIA",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"Sheldrick Redwine",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20923.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"DEN",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Dalton Risner",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20926.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NYJ",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Dru Samia",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20930.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"PHI",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Miles Sanders",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20933.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"KC",
	   "Position":"NT",
	   "PositionCategory":"DEF",
	   "Name":"Khalen Saunders",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20934.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"HOU",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Max Scharping",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20936.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"ATL",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Kendall Sheffield",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20938.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"TEN",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Jeffery Simmons",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20940.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"SF",
	   "Position":"NT",
	   "PositionCategory":"DEF",
	   "Name":"Chris Slayton",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20942.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NE",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Jaylen Smith",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20945.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"DET",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Saivion Smith",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20947.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"WAS",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Montez Sweat",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20956.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NE",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Jahlani Tavai",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20959.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"JAX",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Jawaan Taylor",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20960.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"IND",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Marvell Tell III",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20961.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"KC",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"Juan Thornhill",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20965.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LAC",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Jerry Tillery",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20967.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LAC",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Drue Tranquill",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20968.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"MIN",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Olisaemeka Udoh",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20969.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"MIA",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Andrew Van Ginkel",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20971.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"MIN",
	   "Position":"NT",
	   "PositionCategory":"DEF",
	   "Name":"Armon Watts",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20975.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"TB",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Devin White",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20981.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"GB",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Kerrith Whyte Jr.",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20982.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"MIA",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Christian Wilkins",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20983.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"CLE",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Greedy Williams",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20985.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NE",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Joejuan Williams",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20986.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"CIN",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Jonah Williams",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20987.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NYJ",
	   "Position":"NT",
	   "PositionCategory":"DEF",
	   "Name":"Quinnen Williams",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20989.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"IND",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"Khari Willis",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20991.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NE",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Mack Wilson",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20994.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"CLE",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Chase Winovich",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20995.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"PHI",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Renell Wren",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/20998.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NYG",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Oshane Ximines",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21000.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LV",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Rock Ya-Sin",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21001.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NE",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Yodny Cajuste",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21004.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"PIT",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Demarcus Christmas",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21007.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"SEA",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"L.J. Collier",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21008.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"ATL",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"John Cominsky",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21009.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"MIN",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Ryan Connelly",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21011.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LV",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Lester Cotton Sr.",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21012.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NE",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Byron Cowart",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21013.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LV",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Maxx Crosby",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21015.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"WAS",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Zack Bailey",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21018.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"KC",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"DeAndre Baker",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21020.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"ATL",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Corey Ballentine",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21021.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"IND",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Ben Banogu",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21022.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LV",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Alex Bars",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21024.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"SEA",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Cody Barton",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21025.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LV",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Jackson Barton",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21026.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"BUF",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Ryan Bates",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21027.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"WAS",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Beau Benzschawel",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21030.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"SEA",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"Marquise Blair",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21031.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LAR",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Kendall Blanton",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21032.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"TEN",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Amani Bledsoe",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21033.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"MIN",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Kris Boyd",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21036.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"MIN",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Garrett Bradbury",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21038.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"ATL",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Jordan Brailford",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21040.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"TEN",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"A.J. Brown",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21042.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LV",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Jordan Brown",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21044.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"BAL",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Marquise Brown",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21045.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"DET",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Austin Bryant",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21048.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LV",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Isaiah Buggs",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21049.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"TB",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Sean Murphy-Bunting",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21050.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"CAR",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Brian Burns",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21052.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"SEA",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Ben Burr-Kirven",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21053.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"PIT",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Devin Bush",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21054.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"CAR",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Dennis Daley",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21057.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"TEN",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Nate Davis",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21060.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"TB",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Jamel Dean",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21064.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"MIA",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Michael Deiter",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21065.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"PHI",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Andre Dillard",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21067.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"PIT",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Diontae Johnson",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21077.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LV",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"William Sweet",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21079.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"MIA",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Durval Queiroz Neto",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21098.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"GB",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"Darnell Savage",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21107.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"CLE",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Sione Takitaki",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21108.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NYJ",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Quincy Williams",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21109.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LAC",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Trey Pipkins III",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21110.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"SEA",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"Ugo Amadi",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21111.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NYG",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Wes Martin",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21112.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"CLE",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Drew Forbes",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21113.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"SF",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Ka'Dar Hollman",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21116.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"IND",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"E.J. Speed",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21117.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"HOU",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Blake Cashman",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21118.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"SF",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Justin Skule",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21119.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"WAS",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Cole Holcomb",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21120.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"CHI",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Duke Shelley",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21122.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"DAL",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Donovan Wilson",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21123.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LV",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"P.J. Johnson",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21124.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"GB",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Ty Summers",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21125.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"CHI",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Xavier Crawford",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21127.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LV",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Gerri Green",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21128.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"KC",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Nick Allegretti",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21129.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"KC",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Cortez Broughton",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21130.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LAR",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"Nick Scott",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21131.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"PHI",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"Marcus Epps",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21133.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NO",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Kaden Elliss",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21134.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"ATL",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Quinton Bell",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21136.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"BUF",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Tim Harris",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21137.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"ARI",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Joshua Miles",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21140.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"ARI",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Michael Dogbe",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21141.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NYJ",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Ken Webster",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21145.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"MIA",
	   "Position":"FB",
	   "PositionCategory":"OFF",
	   "Name":"John Lovett",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21156.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"ARI",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Koda Martin",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21160.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NO",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Ethan Greenidge",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21164.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NYJ",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Kyle Phillips",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21165.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"BAL",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Chris Westry",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21174.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"JAX",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Brandon Rusnak",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21175.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LAC",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Kemon Hall",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21187.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LV",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"Roderic Teamer",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21190.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"MIA",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Nik Needham",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21192.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"DEN",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Cody Conway",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21205.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"BAL",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Patrick Mekari",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21206.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"WAS",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Jordan Kunaszyk",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21207.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"DAL",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Ian Bunting",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21208.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"BUF",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Cam Lewis",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21216.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"CLE",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Blake Hance",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21217.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"BUF",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Tyrel Dodson",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21218.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"SF",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Keaton Sutherland",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21222.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NYJ",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Tim Ward",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21225.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"DEN",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Calvin Anderson",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21228.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"SF",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Wyatt Miller",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21230.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"DAL",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Kyron Brown",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21234.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NO",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Dylan Mabin",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21238.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LV",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Keisean Nixon",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21239.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"PIT",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Malcolm Pridgeon",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21241.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LAC",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Jamal Davis II",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21246.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"WAS",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Deion Calhoun",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21266.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"CAR",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Aaron Monteiro",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21268.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"JAX",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"Andrew Wingard",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21281.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NYG",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Alex Bachman",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21294.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LAR",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Marquise Copeland",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21298.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NYJ",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Del'Shawn Phillips",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21306.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"HOU",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Davion Davis",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21311.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LAR",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Chandler Brewer",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21330.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LAR",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Troy Reeder",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21332.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"CLE",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Nate Meadors",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21333.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"CHI",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Noah Dawkins",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21341.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"SF",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Demetrius Flannigan-Fowles",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21354.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NO",
	   "Position":"NT",
	   "PositionCategory":"DEF",
	   "Name":"Braxton Hoyett",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21358.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"TEN",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Derick Roberson",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21360.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"PIT",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"John Leglue",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21362.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"DEN",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Malik Reed",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21366.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"TEN",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Austin Fort",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21369.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"DEN",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"P.J. Locke",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21373.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"KC",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Darius Harris",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21379.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"DEN",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Quinn Bailey",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21406.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"DET",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Matt Nelson",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21411.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"ARI",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Nate Brooks",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21414.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"GB",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Randy Ramsey",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21417.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"GB",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Kabion Ento",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21418.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NO",
	   "Position":"NT",
	   "PositionCategory":"DEF",
	   "Name":"Shy Tuttle",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21422.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NYG",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Derrick Kelly II",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21424.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"ATL",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Anthony Rush",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21435.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"WAS",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Daniel Wise",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21444.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NO",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Andrew Dowell",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21445.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"DAL",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Luke Gifford",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21449.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"MIA",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"D'Angelo Ross",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21463.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"DEN",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Jonathan Harris",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21466.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NYJ",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"D.J. Montgomery",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21473.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"CHI",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Willie Wright",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21475.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"DET",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Curtis Bolton",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21478.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"BAL",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Otaro Alaka",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21482.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"SF",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Azeez Al-Shaair",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21490.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"SEA",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Bryan Mone",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21494.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NO",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Jalen Dalton",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21507.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"CLE",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Willie Harvey Jr.",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21511.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"CLE",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Herb Miller",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21521.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"PIT",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Damion Willis",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21528.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"IND",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Anthony Chesley",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21530.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NYG",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Chris Myarick",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21531.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"BAL",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Isaiah Mack",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21535.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"TEN",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Kevin Strong",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21536.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"DET",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"C.J. Moore",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21538.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"DET",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Anthony Pittman",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21543.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"DET",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Craig Reynolds",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21564.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"TEN",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Tuzar Skipper",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21578.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LAR",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Kareem Orr",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21581.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"NYJ",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Freedom Akinmoladun",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21584.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"LAR",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"Jake Gervase",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21588.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"DEN",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Casey Tucker",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21600.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"ARI",
	   "Position":"SS",
	   "PositionCategory":"DEF",
	   "Name":"Jalen Thompson",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21635.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"BAL",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Mazzi Wilkins",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21639.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"PHI",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Brett Toth",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21661.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2019
	},
	{
	   "Team":"MIA",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Tua Tagovailoa",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21677.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"DAL",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"CeeDee Lamb",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21679.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"LAC",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Justin Herbert",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21681.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"IND",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Jonathan Taylor",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21682.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"DET",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"D'Andre Swift",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21684.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"MIN",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Justin Jefferson",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21685.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"PHI",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"DeVonta Smith",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21687.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"CIN",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Tee Higgins",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21690.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"DEN",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Jerry Jeudy",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21692.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CIN",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Joe Burrow",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21693.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NO",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Easop Winston Jr.",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21724.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"LV",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Bryan Edwards",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21736.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"IND",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Michael Pittman Jr.",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21744.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NYJ",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Tarik Black",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21746.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"SF",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Brandon Aiyuk",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21747.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NO",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Marquez Callaway",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21750.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"IND",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Quartney Davis",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21761.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"PIT",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Najee Harris",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21768.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"KC",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Clyde Edwards-Helaire",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21769.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CHI",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Cole Kmet",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21772.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"BUF",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Zack Moss",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21784.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NO",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Adam Trautman",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21786.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CIN",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Mitchell Wilcox",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21800.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NYG",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Brian Lewerke",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21811.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"PHI",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Jalen Hurts",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21831.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"WAS",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Antonio Gibson",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21861.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"SF",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Javon Kinlaw",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21867.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"MIA",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Benito Jones",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21868.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"JAX",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"DaVon Hamilton",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21869.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NYJ",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Bradlee Anae",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21870.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"IND",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Robert Windsor",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21871.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"PIT",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Derrek Tuszka",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21873.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CLE",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Curtis Weaver",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21874.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"WAS",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"James Smith-Williams",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21875.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CIN",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Khalid Kareem",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21876.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"HOU",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Jonathan Greenard",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21879.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"TEN",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Larrell Murchison",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21880.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"BUF",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"A.J. Epenesa",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21881.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"SEA",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Darrell Taylor",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21882.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"DET",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"John Penisini",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21883.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"ATL",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Marlon Davidson",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21884.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"ARI",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Rashard Lawrence",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21885.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"BAL",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Broderick Washington",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21886.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"DET",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Julian Okwara",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21887.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"JAX",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"K'Lavon Chaisson",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21888.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NE",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Josh Uche",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21889.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CHI",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Trevis Gipson",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21890.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"GB",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Tipa Galeai",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21891.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"MIN",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Kenny Willekes",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21893.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"MIN",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"James Lynch",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21894.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"PHI",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Raequan Williams",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21895.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CAR",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Yetur Gross-Matos",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21896.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"PIT",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Alex Highsmith",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21897.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NE",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Anfernee Jennings",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21898.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NO",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Malcolm Roach",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21899.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"BAL",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Justin Madubuike",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21900.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"SEA",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Alton Robinson",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21901.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NYG",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Carter Coughlin",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21902.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"LAR",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Terrell Lewis",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21903.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"GB",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"La'Darius Hamilton",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21904.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"GB",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Jonathan Garvin",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21906.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NO",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Zack Baun",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21907.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"GB",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Chauncey Rivers",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21908.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"MIN",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"D.J. Wonnum",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21909.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NYJ",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Jabari Zuniga",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21910.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CIN",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Markus Bailey",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21911.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CIN",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Joe Bachie",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21913.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"PHI",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Shaun Bradley",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21914.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"DAL",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Francis Bernard",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21915.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CLE",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Grant Delpit",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21918.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"TEN",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Rodney Clemons",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21919.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"TEN",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Shyheim Carter",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21920.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CAR",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Jeremy Chinn",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21921.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"LAR",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Terrell Burgess",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21922.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"WAS",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Kamren Curl",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21923.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"LAR",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Antoine Brooks Jr.",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21924.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NYJ",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Ashtyn Davis",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21925.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NE",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Kyle Dugger",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21926.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"MIA",
	   "Position":"FS",
	   "PositionCategory":"DEF",
	   "Name":"Brandon Jones",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21927.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"JAX",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Daniel Thomas",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21928.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"MIN",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Josh Metellus",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21929.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"DET",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Jalen Elliott",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21930.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"BAL",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Geno Stone",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21931.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"SEA",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Tanner Muse",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21932.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"ATL",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Jaylinn Hawkins",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21933.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"KC",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"L'Jarius Sneed",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21934.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"DEN",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"J.R. Reed",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21935.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NYG",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Xavier McKinney",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21936.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"LAR",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Jordan Fuller",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21937.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"PHI",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"K'Von Wallace",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21938.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"LAC",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Alohi Gilman",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21939.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"TB",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Antoine Winfield Jr.",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21940.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"GB",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Jake Hanson",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21942.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"MIA",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Robert Hunt",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21943.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"DET",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Jonah Jackson",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21944.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"WAS",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Keith Ismael",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21945.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"HOU",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Charlie Heck",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21947.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CLE",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Nick Harris",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21948.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"MIA",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Austin Jackson",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21949.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NE",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Justin Herron",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21950.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"ATL",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Matt Hennessy",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21951.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"PIT",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Cody White",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21964.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CAR",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Aaron Parker",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21969.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"JAX",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"James Robinson",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21970.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"JAX",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Shaquille Quarterman",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21974.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NYG",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Cam Brown",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21978.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CLE",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Jacob Phillips",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21979.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CIN",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Clay Johnston",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21980.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"PHI",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Jack Driscoll",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21981.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"BAL",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Patrick Queen",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21982.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"LAR",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Tremayne Anchrum Jr.",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21983.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"KC",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Willie Gay",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21984.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"LAC",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Kenneth Murray Jr.",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21985.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"PHI",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Davion Taylor",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21987.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"ATL",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Mykal Walker",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21989.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NYG",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Ben Bredeson",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21990.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"WAS",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"De'Jon Harris",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21991.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"MIN",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Ezra Cleveland",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21993.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"MIN",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Troy Dye",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21994.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"DAL",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Tyler Biadasz",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21995.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"BAL",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Malik Harrison",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21996.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"DEN",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Lloyd Cushenberry III",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21997.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NE",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Yasir Durant",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21998.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CIN",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Akeem Davis-Gaither",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/21999.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"DEN",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Justin Strnad",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22000.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NO",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Cohl Cabral",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22001.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CIN",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Logan Wilson",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22003.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"ARI",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Isaiah Simmons",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22004.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"SEA",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Jordyn Brooks",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22005.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"JAX",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Chapelle Russell",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22006.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CAR",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Kamal Martin",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22007.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"WAS",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Saahdiq Charles",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22008.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NYJ",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Mekhi Becton",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22009.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"BAL",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Trystan Colon",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22010.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"JAX",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Ben Bartch",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22012.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CIN",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Hakeem Adeniji",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22015.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CAR",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Azur Kamara",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22016.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"WAS",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Khaleke Hudson",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22017.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"KC",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Lucas Niang",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22018.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CLE",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Alex Taylor",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22019.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"KC",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Prince Tega Wanogho",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22020.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"TB",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"John Molchon",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22021.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"SF",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Colton McKivitz",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22023.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CLE",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Jedrick Wills Jr.",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22024.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NYG",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Andrew Thomas",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22025.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"DET",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Logan Stenberg",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22026.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"BAL",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Tyre Phillips",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22027.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"SEA",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Damien Lewis",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22028.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"ARI",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Josh Jones",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22029.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"IND",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Danny Pinter",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22030.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"LV",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"John Simpson",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22031.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"DEN",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Netane Muti",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22032.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"TB",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Tristan Wirfs",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22033.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"KC",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Darryl Williams",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22034.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NYG",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Matt Peart",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22035.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NO",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Cesar Ruiz",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22036.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"MIA",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Solomon Kindley",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22037.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NE",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Mike Onwenu",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22038.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NYG",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Shane Lemieux",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22039.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"GB",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Jon Runyan",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22040.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"DAL",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Terence Steele",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22041.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NO",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Calvin Throckmorton",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22043.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"DET",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Jeff Okudah",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22044.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CLE",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"A.J. Green",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22046.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NE",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Myles Bryant",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22047.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"MIN",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Cameron Dantzler",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22048.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CHI",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Lamar Jackson",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22049.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NYG",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Darnay Holmes",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22050.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"DAL",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Trevon Diggs",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22051.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CAR",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"CJ Henderson",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22052.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"MIN",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Harrison Hand",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22053.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"HOU",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Ross Blacklock",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22054.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CAR",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Troy Pride Jr.",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22055.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CHI",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Jaylon Johnson",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22056.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"PHI",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Josiah Scott",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22057.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"ARI",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Jeff Gladney",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22058.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CLE",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Jordan Elliott",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22059.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"BUF",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Dane Jackson",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22060.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"SEA",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"John Reid",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22061.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"MIA",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Raekwon Davis",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22062.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"MIA",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Javaris Davis",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22064.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"HOU",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Grayland Arnold",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22065.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"SF",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Lavert Hill",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22066.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"PIT",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Carlos Davis",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22067.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"PIT",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"James Pierre",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22068.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CHI",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Stanford Samuels III",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22069.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"PIT",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Khalil Davis",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22070.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"MIA",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Noah Igbinoghene",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22072.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"SF",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Darrion Daniels",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22074.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"ATL",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"A.J. Terrell",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22075.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NYJ",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Bryce Hall",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22076.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"DAL",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Neville Gallimore",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22078.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CHI",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Kindle Vildor",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22079.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"DEN",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Michael Ojemudia",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22080.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NYJ",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Javelin Guidry",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22081.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"DEN",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"McTelvin Agim",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22082.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"ARI",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Leki Fotu",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22083.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"TEN",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Kristian Fulton",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22084.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CAR",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Derrick Brown",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22085.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"DEN",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Essang Bassey",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22086.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"HOU",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Reggie Robinson II",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22087.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CAR",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Stantley Thomas-Oliver III",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22088.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"LV",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Amik Robertson",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22089.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NYG",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Kyle Murphy",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22091.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"WAS",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Chase Young",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22092.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"KC",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Mike Danna",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22095.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"BUF",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Damar Hamlin",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22097.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"SEA",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Nigel Warrior",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22098.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"PHI",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Jared Mayden",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22103.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"WAS",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Casey Toohill",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22104.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"IND",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Julian Blackmon",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22109.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"DET",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Tommy Kraemer",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22110.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"PIT",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Kevin Dotson",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22132.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CAR",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Kenny Robinson",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22133.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CAR",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Bravvion Roy",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22135.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"MIN",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Blake Brandel",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22136.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"IND",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Isaiah Rodgers",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22139.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"IND",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Jordan Glasgow",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22140.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"JAX",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Chris Claybrooks",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22141.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NE",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Arlington Hambright",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22142.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CHI",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Lachavious Simmons",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22143.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"DET",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Jashon Cornell",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22147.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"GB",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Vernon Scott",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22148.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CHI",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Thakarius Keyes",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22149.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NYG",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"TJ Brunson",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22150.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"TEN",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Chris Jackson",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22152.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"TEN",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Chris Williamson",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22153.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"MIN",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Kyle Hinton",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22155.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NYG",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Tae Crowder",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22156.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"PHI",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Reid Sinnett",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22160.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CHI",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Ledarius Mack",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22161.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"ARI",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Jace Whittaker",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22171.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NYG",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Jarren Williams",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22172.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"BUF",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Evin Ksiezarczyk",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22179.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"KC",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Austin Edwards",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22185.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"GB",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Ray Wilborn",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22187.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"DEN",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Rojesterman Farris",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22189.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"LAR",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Tyler Hall",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22190.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"BAL",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Jaylon Moore",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22193.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"BAL",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Aaron Crawford",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22196.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CHI",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"John Daka",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22197.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"BAL",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Kristian Welch",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22199.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"BAL",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Khalil Dorsey",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22202.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"TB",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Brandon Walton",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22209.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"BUF",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Josh Thomas",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22211.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CAR",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Mike Horton",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22223.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"SEA",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Myles Adams",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22224.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CAR",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Sam Franklin",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22226.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CAR",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Myles Hartsfield",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22228.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CHI",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Dieter Eiselen",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22230.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"JAX",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Badara Traore",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22231.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CHI",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"LaCale London",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22232.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"ATL",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Rashad Smith",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22233.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"ARI",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Andre Baccellia",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22234.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"LAC",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Maurice Ffrench",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22235.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CIN",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Scotty Washington",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22238.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NYJ",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Jovante Moffatt",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22251.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"HOU",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Ron'Dell Carter",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22253.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"DET",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Bobby Price",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22258.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"DEN",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Zack Johnson",
	   "Age":28,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22263.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"TB",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Willington Previlon",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22265.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"GB",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Krys Barnes",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22266.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"GB",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Henry Black",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22269.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CHI",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Auzoyah Alufohai",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22273.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"JAX",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Jamir Jones",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22274.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"IND",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Carter O'Donnell",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22277.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"IND",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Kameron Cline",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22278.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"IND",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Chris Williams",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22279.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"JAX",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Josh Hammond",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22283.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"KC",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Luq Barcoo",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22289.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"KC",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Tershawn Wharton",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22295.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NYG",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Omari Cobb",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22296.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NYJ",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Javin White",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22303.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CAR",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Madre Harper",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22305.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"JAX",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Jeff Cotton",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22311.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"PIT",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Nate Gilliam",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22315.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"DET",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Jessie Lemonier",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22316.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"LAC",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Joe Gaziano",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22317.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"LAC",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Breiden Fehoko",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22318.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"MIN",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"T.J. Smith",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22319.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"LAC",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Cole Christiansen",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22321.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CIN",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"John Brannon",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22323.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"LAR",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"J.J. Koski",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22327.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"DET",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Eric Banks",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22329.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"LAR",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Michael Hoecht",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22330.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"LAR",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Jonah Williams",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22332.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"LAR",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Christian Rozeboom",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22334.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"DET",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"JuJu Hughes",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22335.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NO",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Kirk Merritt",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22339.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"MIN",
	   "Position":"FB",
	   "PositionCategory":"OFF",
	   "Name":"Jake Bargas",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22346.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NYG",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"David Moa",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22350.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"MIN",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Blake Lynch",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22352.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"MIN",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Myles Dorn",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22353.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NE",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Bill Murray",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22356.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"HOU",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Jordan Steckler",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22359.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NYG",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Rysen John",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22365.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NYG",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Niko Lalos",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22367.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NYJ",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Bryce Huff",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22377.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"PHI",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Luke Juriga",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22388.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"JAX",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Michael Jacquet",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22389.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NYJ",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Elijah Riley",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22390.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"DAL",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Isaac Alarc\u00f3n",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22392.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"WAS",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"David Bada",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22393.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"PHI",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Matt Leo",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22394.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"NYG",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Sandro Platzgummer",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22395.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"SF",
	   "Position":"FB",
	   "PositionCategory":"OFF",
	   "Name":"Josh Hokit",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22400.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"DEN",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Jonas Griffith",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22401.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"SEA",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Tyler Mabry",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22407.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"SEA",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Gavin Heslop",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22412.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"TEN",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Mason Kinsey",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22415.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"TEN",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Aaron Brewer",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22419.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"TEN",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Brandon Kemp",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22420.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"TEN",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Teair Tart",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22422.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"TB",
	   "Position":"NT",
	   "PositionCategory":"DEF",
	   "Name":"Kobe Smith",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22423.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"TB",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Nick Leverett",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22426.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"DET",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Parnell Motley",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22427.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"TB",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Cam Gill",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22429.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"ARI",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Javon Hagan",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22431.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"TB",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Travis Jonsen",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22432.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"TB",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"John Hurst",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22433.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"TB",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Benning Potoa'e",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22434.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"DET",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Rashod Berry",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22436.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CAR",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Austen Pleasants",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22444.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CAR",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Sam Tecklenburg",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22447.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"CIN",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Keandre Jones",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22449.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"WAS",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Tyler Clark",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22452.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"ATL",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Luther Kirk",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22453.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"JAX",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Tre'Vour Wallace-Simms",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22454.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"IND",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Farrod Green",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22458.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"PIT",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Delontae Scott",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22461.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"TB",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Jonathan Hubbard",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22462.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"LV",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Kamaal Seymour",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22471.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"HOU",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Paul Quessenberry",
	   "Age":30,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22475.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"DEN",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Aaron Patrick",
	   "Age":29,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/0.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"GB",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Innis Gaines",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22489.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"JAX",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Trevor Lawrence",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22490.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"CHI",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Justin Fields",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22492.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"SF",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Trey Lance",
	   "Age":21,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22493.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"TB",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Kyle Trask",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22494.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NYJ",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Zach Wilson",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22495.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NE",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Mac Jones",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22496.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"ATL",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Kyle Pitts",
	   "Age":21,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22508.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"CLE",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Miller Forristall",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22520.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NYJ",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Michael Carter",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22553.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DEN",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Javonte Williams",
	   "Age":21,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22558.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"SEA",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Cade Johnson",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22567.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DET",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Amon-Ra St. Brown",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/0.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"TB",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Austin Watkins Jr.",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22589.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DAL",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"T.J. Vasher",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22610.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"PIT",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Rico Bussey",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22625.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"MIN",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Myron Mitchell",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22634.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DAL",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Brandon Smith",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22637.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"LV",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"D.J. Turner",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22644.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DAL",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"JaQuan Hardy",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22650.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DET",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Javon McKinley",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22655.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NO",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Dylan Soehner",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22659.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"TEN",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Briley Moore",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22660.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"LAC",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Hunter Kampmoyer",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22663.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"SF",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Connor Wedington",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22681.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"LV",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Tre'Von Moehrig",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22688.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"IND",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Kwity Paye",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22689.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"LAC",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Rashawn Slater",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22690.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DET",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Penei Sewell",
	   "Age":21,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22691.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DEN",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Pat Surtain II",
	   "Age":21,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22692.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"TEN",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Caleb Farley",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22693.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"CAR",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Jaycee Horn",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22694.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DAL",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Micah Parsons",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22695.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"CLE",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Jeremiah Owusu-Koramoah",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22696.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"ARI",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Zaven Collins",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22697.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"BUF",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Greg Rousseau",
	   "Age":21,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22698.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"MIA",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Jaelan Phillips",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22699.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NO",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Paulson Adebo",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22704.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"PHI",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Jack Anderson",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22705.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"PHI",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Kayode Awosika",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22706.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DAL",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Josh Ball",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22707.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"SF",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Aaron Banks",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22708.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NE",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Christian Barmore",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22709.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DET",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Derrick Barnes",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/0.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NE",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Joshuah Bledsoe",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22712.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DAL",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Quinton Bohanna",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22713.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"KC",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Nick Bolton",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22714.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"MIN",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Tuf Borland",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22715.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"CHI",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Larry Borom",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22716.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"WAS",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Will Bradley-King",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22718.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DET",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Brady Breeze",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22719.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"TB",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"K.J. Britt",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22720.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"LAR",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Bobby Brown III",
	   "Age":21,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22721.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"CAR",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Deonte Brown",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22722.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"LAR",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Earnest Brown IV",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22723.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"BUF",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Spencer Brown",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22725.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"SEA",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Tre Brown",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22726.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DEN",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Baron Browning",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22727.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"JAX",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Lorenzo Burns",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22728.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"MIN",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Camryn Bynum",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22729.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NO",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Landon Young",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22730.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"JAX",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Tyson Campbell",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22731.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"CIN",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Jackson Carman",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22732.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DAL",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Nahshon Wright",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22733.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"PHI",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Marvin Wilson",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22734.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NYJ",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Michael Carter II",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22735.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"TEN",
	   "Position":"FB",
	   "PositionCategory":"OFF",
	   "Name":"Tory Carter",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22736.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"CAR",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Brady Christensen",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22738.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"ARI",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Marco Wilson",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22739.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"JAX",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Andre Cisco",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22740.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"MIA",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Trill Williams",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22741.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NYG",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Rodarius Williams",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22742.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"BAL",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Ben Cleveland",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22743.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"PHI",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Milton Williams",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22744.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NYJ",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Rachad Wildgoose",
	   "Age":21,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22745.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DEN",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Jonathon Cooper",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22746.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"WAS",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Sam Cosmi",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22747.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"IND",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Chris Wilcox",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22748.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DAL",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Jabril Cox",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22749.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"ARI",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"James Wiggins",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22750.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"SEA",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Jake Curhan",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22752.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NO",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Pete Werner",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22753.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"ATL",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Drew Dalman",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22754.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NE",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"DJ Daniel",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22755.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"LAC",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Mark Webb Jr.",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22756.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"MIN",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Christian Darrisaw",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22757.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"TEN",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Rashad Weaver",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22758.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"WAS",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Jamin Davis",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22759.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"BAL",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Ar'Darius Washington",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22760.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"HOU",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Garret Wallow",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22761.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"GB",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Shawn Davis",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22762.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NE",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Shaun Wade",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22763.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"MIN",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Wyatt Davis",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22764.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"PHI",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Kary Vincent Jr.",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22765.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NYJ",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Alijah Vera-Tucker",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22766.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"LV",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Divine Deablo",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22767.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"GB",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Cole Van Lanen",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22768.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"PHI",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Landon Dickerson",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22769.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"MIN",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Jaylen Twyman",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/0.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NO",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Payton Turner",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22772.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"PHI",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Marlon Tuipulotu",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22773.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"JAX",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Jay Tufele",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22774.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"TB",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Joe Tryon-Shoyinka",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22775.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"CHI",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Khyiris Tonga",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22778.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"WAS",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Shaka Toney",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22779.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"CLE",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Tommy Togiai",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22780.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NO",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Bryce Thompson",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22781.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"SF",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Ambry Thomas",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22782.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"CAR",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Keith Taylor Jr.",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22783.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"MIN",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Chazz Surratt",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22784.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"TB",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Grant Stuard",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22785.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"GB",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Eric Stokes",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22786.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"WAS",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Benjamin St-Juste",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22787.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"ARI",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Victor Dimukeje",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22788.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"BUF",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Tommy Doyle",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22790.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"PHI",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"JaCoby Stevens",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22792.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DEN",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Caden Sterns",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22793.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DEN",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Marquiss Spencer",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22795.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"CHI",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Charles Snowden",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/0.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"KC",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Trey Smith",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22797.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"JAX",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Jordan Smith",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22798.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"LAR",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Adrian Ealy",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22800.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NYG",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Elerson Smith",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22801.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"CIN",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"D'Ante Smith",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22802.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"GB",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"T.J. Slaton",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22803.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NYJ",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Jamien Sherwood",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22804.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NE",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Will Sherman",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22805.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"CIN",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Tyler Shelvin",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22806.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"LAC",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Asante Samuel Jr.",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22807.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NYJ",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Brandin Echols",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22808.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"MIA",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Liam Eichenberg",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22809.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DAL",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Austin Faoliu",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22810.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"CLE",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Tony Fields II",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22811.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"WAS",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Darrick Forrest",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22815.png",
	   "CollegeDraftTeam":"WAS",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"SEA",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Stone Forsythe",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22816.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"IND",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Will Fries",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22817.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DET",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Mark Gilbert",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22818.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"LV",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Tyree Gillespie",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22819.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DAL",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Chauncey Golston",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22820.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"CHI",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Thomas Graham Jr.",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22821.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"ATL",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Ta'Quon Graham",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22822.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"ATL",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Richie Grant",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22824.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"HOU",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Carson Green",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22825.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"PIT",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Kendrick Green",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22826.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"BUF",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Olaijah Griffin",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22827.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"TB",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Robert Hainsey",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22828.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"ATL",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Darren Hall",
	   "Age":21,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22829.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"BAL",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Daelin Hayes",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22832.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"KC",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Malik Herring",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22833.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"CIN",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Trey Hill",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22834.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"CIN",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Cam Sample",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22835.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NYG",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Justin Hilliard",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22836.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DEN",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Drew Himmelman",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22837.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"LAC",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Chris Rumph II",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22838.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"LAR",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Anthony Hines III",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22839.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"JAX",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Jared Hocker",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22840.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"MIA",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Jevon Holland",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22841.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"CIN",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Wyatt Hubert",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22842.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"CLE",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"James Hudson III",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22843.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"SF",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Talanoa Hufanga",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22844.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"KC",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Creed Humphrey",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22845.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"TB",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Sadarius Hutcherson",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22846.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"LAR",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"AJ Jackson",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22847.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"LAR",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Robert Rochell",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22848.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NYG",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Quincy Roche",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22850.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"PHI",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Tarron Jackson",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22851.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"MIN",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Janarius Robinson",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22852.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"LAC",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Brenden Jaimes",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22853.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NYG",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Aaron Robinson",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22854.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"TEN",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Monty Rice",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22855.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NYJ",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Hamilcar Rashed Jr.",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22856.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"TEN",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Dillon Radunz",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22857.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NE",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Ronnie Perkins",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22859.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"CHI",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Teven Jenkins",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22860.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"PIT",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Buddy Johnson",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22861.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DEN",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Jamar Johnson",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22862.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"PHI",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Patrick Johnson",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22864.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"LAR",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Ernest Jones",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22865.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"TEN",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Naquan Jones",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22866.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"BAL",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Odafe Oweh",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22867.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"CIN",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Joseph Ossai",
	   "Age":21,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22868.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DET",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Levi Onwuzurike",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22869.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NYG",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Azeez Ojulari",
	   "Age":21,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22870.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"LAC",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Amen Ogbongbemiga",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22872.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DAL",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Osa Odighizuwa",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22873.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"IND",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Dayo Odeyingbo",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22874.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"PIT",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Tre Norwood",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22875.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"CAR",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Daviyon Nixon",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22876.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"CLE",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Greg Newsome II",
	   "Age":21,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22877.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"GB",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Royce Newman",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22878.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NYJ",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Hamsah Nasirildeen",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22879.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"GB",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Josh Myers",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22880.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DAL",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Israel Mukuamu",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22881.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"JAX",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Dylan Moses",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22882.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"HOU",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Jimmy Morrissey",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22883.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"SF",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Jaylon Moore",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22884.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"CLE",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"David Moore",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/0.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"PIT",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Dan Moore Jr.",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22886.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"TEN",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Elijah Molden",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22887.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"MIN",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Bryan Mills",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22888.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"LAC",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Forrest Merrill",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22889.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"MIN",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Patrick Jones II",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22890.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"MIA",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Robert Jones",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22891.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"JAX",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Tim Jones",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22892.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DAL",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Kelvin Joseph",
	   "Age":21,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22894.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"KC",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Joshua Kaindoh",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22895.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"LV",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Malcolm Koonce",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22896.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"LV",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Alex Leatherwood",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22897.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"CLE",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Richard LeCounte III",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22898.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"SF",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Deommodore Lenoir",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22899.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"JAX",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Walker Little",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22900.png",
	   "CollegeDraftTeam":"JAX",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NYJ",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Jonathan Marshall",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22901.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"ATL",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Jalen Mayfield",
	   "Age":21,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22903.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"GB",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Isaiah McDuffie",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22904.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NE",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Cameron McGrone",
	   "Age":21,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22905.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DET",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Alim McNeill",
	   "Age":21,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22906.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"PHI",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Zech McPhearson",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22907.png",
	   "CollegeDraftTeam":"PHI",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DEN",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Quinn Meinerz",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22909.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DET",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Ifeatu Melifonwu",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22910.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"GB",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Michal Menet",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22911.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"BUF",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Boogie Basham",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22918.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"PIT",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Isaiahh Loudermilk",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22920.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"LV",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Nate Hobbs",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22921.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NYJ",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Jason Pinnock",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22922.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"GB",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Shemar Jean-Charles",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22923.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"ATL",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Adetokunbo Ogundeji",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22924.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"ATL",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Avery Williams",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22925.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"LAC",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Nick Niemann",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22926.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"HOU",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Roy Lopez",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22928.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"PHI",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Tay Gowan",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22929.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"MIA",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Larnel Coleman",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22931.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"CAR",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Phil Hoskins",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22932.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DAL",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Matt Farniok",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22933.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"LAR",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Chris Garrett",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22934.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"LV",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Brett Heggie",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22935.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"CHI",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Sam Kamara",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22941.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"CHI",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Caleb Johnson",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22942.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DET",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"AJ Parker",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22943.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"GB",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Jack Heflin",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22945.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DET",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Ryan McCollum",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22947.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"KC",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Devon Key",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22948.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"KC",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Josh Pederson",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22954.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"SEA",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Jon Rhattigan",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22956.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NYG",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Dwayne Johnson Jr.",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22959.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"LAC",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Ben DeLuca",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22964.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DAL",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Josiah Bronson",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22970.png",
	   "CollegeDraftTeam":"NO",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"HOU",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Sam Cooper",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/0.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"MIA",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Kion Smith",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22972.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"ATL",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Austin Trammell",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22973.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"TEN",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Kobe Jones",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22978.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"BAL",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Xavier Kelly",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22979.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"LAC",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Foster Sarell",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22980.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"BUF",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Nick McCloud",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22983.png",
	   "CollegeDraftTeam":"BUF",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"MIA",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Darius Hodge",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22987.png",
	   "CollegeDraftTeam":"CIN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DEN",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Andre Mintze",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22988.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"PIT",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Donovan Stiner",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22990.png",
	   "CollegeDraftTeam":"PIT",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"LAR",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Landen Akers",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22991.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"LV",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Jordan Meredith",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22993.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"TB",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Troy Warner",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22996.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"CLE",
	   "Position":"RB",
	   "PositionCategory":"OFF",
	   "Name":"Tre Harbison",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/22997.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DAL",
	   "Position":"C",
	   "PositionCategory":"OFF",
	   "Name":"Braylon Jones",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23000.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DAL",
	   "Position":"S",
	   "PositionCategory":"DEF",
	   "Name":"Tyler Coyle",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23001.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DAL",
	   "Position":"FB",
	   "PositionCategory":"OFF",
	   "Name":"Nick Ralston",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23002.png",
	   "CollegeDraftTeam":"DAL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"SF",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Curtis Robinson",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23003.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NO",
	   "Position":"FB",
	   "PositionCategory":"OFF",
	   "Name":"Adam Prentice",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23004.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"WAS",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Nolan Laufenberg",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23005.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"PHI",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Mac McCain III",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23006.png",
	   "CollegeDraftTeam":"DEN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NYG",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Raymond Johnson III",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23008.png",
	   "CollegeDraftTeam":"NYG",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DET",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Tavante Beckett",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23009.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DET",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Brock Wright",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23010.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DET",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Jerry Jacobs",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23011.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"HOU",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Damon Hazelton",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23013.png",
	   "CollegeDraftTeam":"HOU",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NYG",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Devery Hamilton",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23015.png",
	   "CollegeDraftTeam":"LV",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"PHI",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Christian Elliss",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23017.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"ATL",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Ryan Neuzil",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23020.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"KC",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Zayne Anderson",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23021.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"KC",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Dicaprio Bootle",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23022.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NYJ",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Grant Hermanns",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23031.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"HOU",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Michael Dwumfour",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23034.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"SEA",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Greg Eiland",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23038.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"SEA",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Pier-Olivier Lestage",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23039.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"TB",
	   "Position":"OLB",
	   "PositionCategory":"DEF",
	   "Name":"Elijah Ponder",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23043.png",
	   "CollegeDraftTeam":"TB",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"MIN",
	   "Position":"G",
	   "PositionCategory":"OFF",
	   "Name":"Cole Banwart",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23045.png",
	   "CollegeDraftTeam":"TEN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"ATL",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"John Raine",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23050.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"PIT",
	   "Position":"DL",
	   "PositionCategory":"DEF",
	   "Name":"Daniel Archibong",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23054.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"ATL",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Dorian Etheridge",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23056.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"GB",
	   "Position":"CB",
	   "PositionCategory":"DEF",
	   "Name":"Kiondre Thomas",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23059.png",
	   "CollegeDraftTeam":"CLE",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NYG",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Jake Hausmann",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23060.png",
	   "CollegeDraftTeam":"DET",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"BUF",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Jacob Capra",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23061.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"JAX",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Coy Cronk",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23062.png",
	   "CollegeDraftTeam":"GB",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"ARI",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Bernhard Seikovits",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23063.png",
	   "CollegeDraftTeam":"ARI",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"SEA",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Aaron Donkor",
	   "Age":27,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23064.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"SF",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Alfredo Gutierrez",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23065.png",
	   "CollegeDraftTeam":"SF",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"LAR",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Max Pircher",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23066.png",
	   "CollegeDraftTeam":"LAR",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"WAS",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Milo Eifler",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23072.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DEN",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Tristen Hoge",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23073.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NYJ",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Isaiah Dunn",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23077.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NYJ",
	   "Position":"OT",
	   "PositionCategory":"OFF",
	   "Name":"Parker Ferguson",
	   "Age":22,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/0.png",
	   "CollegeDraftTeam":"NYJ",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"CLE",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Nick Guggemos",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/0.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DET",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Shane Zylstra",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23084.png",
	   "CollegeDraftTeam":"MIN",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"DEN",
	   "Position":"ILB",
	   "PositionCategory":"DEF",
	   "Name":"Barrington Wade",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23087.png",
	   "CollegeDraftTeam":"BAL",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"SEA",
	   "Position":"DT",
	   "PositionCategory":"DEF",
	   "Name":"Jarrod Hewitt",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23089.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"CAR",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"C.J. Saunders",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23090.png",
	   "CollegeDraftTeam":"CAR",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"NYG",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Travis Toivonen",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23096.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"CHI",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Tyrone Wheatley Jr.",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23098.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"LAC",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Michael Bandy",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/0.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"LAC",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Damon Lloyd",
	   "Age":23,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/0.png",
	   "CollegeDraftTeam":"LAC",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"ATL",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Parker Hesse",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/23101.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2020
	},
	{
	   "Team":"IND",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Michael Jacobson",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/0.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"SEA",
	   "Position":"LB",
	   "PositionCategory":"DEF",
	   "Name":"Lakiem Williams",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/0.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"SEA",
	   "Position":"DE",
	   "PositionCategory":"DEF",
	   "Name":"Alex Tchangam",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/0.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"KC",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Mark Vital",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/0.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"CHI",
	   "Position":"QB",
	   "PositionCategory":"OFF",
	   "Name":"Ryan Willis",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/0.png",
	   "CollegeDraftTeam":"CHI",
	   "CollegeDraftYear":2021
	},
	{
	   "Team":"ATL",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"DeAundre Alford",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/0.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2022
	},
	{
	   "Team":"ATL",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Brayden Lenius",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/0.png",
	   "CollegeDraftTeam":"ATL",
	   "CollegeDraftYear":2022
	},
	{
	   "Team":"IND",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Jordan Murray",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/0.png",
	   "CollegeDraftTeam":"SEA",
	   "CollegeDraftYear":2022
	},
	{
	   "Team":"IND",
	   "Position":"TE",
	   "PositionCategory":"OFF",
	   "Name":"Nikola Kalinic",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/0.png",
	   "CollegeDraftTeam":"IND",
	   "CollegeDraftYear":2022
	},
	{
	   "Team":"MIA",
	   "Position":"WR",
	   "PositionCategory":"OFF",
	   "Name":"Devonte Dedmon",
	   "Age":26,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/0.png",
	   "CollegeDraftTeam":"MIA",
	   "CollegeDraftYear":2022
	},
	{
	   "Team":"NE",
	   "Position":"OL",
	   "PositionCategory":"OFF",
	   "Name":"Drew Desjarlais",
	   "Age":24,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/0.png",
	   "CollegeDraftTeam":"NE",
	   "CollegeDraftYear":2022
	},
	{
	   "Team":"KC",
	   "Position":"DB",
	   "PositionCategory":"DEF",
	   "Name":"Brandin Dandridge",
	   "Age":25,
	   "PhotoUrl":"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/0.png",
	   "CollegeDraftTeam":"KC",
	   "CollegeDraftYear":2022
	}
]

export default players