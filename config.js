var api = 'https://blocks.cash2.org:8080';
var donationAddress = "";
var blockTargetInterval = 9; // enter the block interval in seconds
var coinUnits = 100;  // enter in the amount of atomic units in 1 coin, eg. 100 shells = 1 trtl
var totalSupply =  1000000000; // enter the total supply in atomic units
var symbol = 'cash2'; // enter the coin's ticker
var refreshDelay = 30000;

// pools stats by MainCoins
var networkStat = [
	["blakepool.com", "http://eu.blakepool.com:8117"],
	["cash2pool.us", "http://cash2pool.us:8117"],
	["cash2.org", "https://pool1.cash2.org:8119"],
	["solobox.com", "https://soloblox.com:8119"],
	["cash2.de", "https://cash2.de:8119"]
];

var networkStat2 = [
]
