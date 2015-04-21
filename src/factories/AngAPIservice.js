app.factory("APIservice", function($http){

    var APIservice = {};
    
    APIservice.index = function(){
        
        return  $http.get("http://api.uxplr.com/api/activity/categories");
    };
    
    APIservice.getdepartures = function(){
        return [
  {
    "label": "Abu Dhabi (AUH)",
    "value": "AUH"
  },
  {
    "label": "Accra (ACC)",
    "value": "ACC"
  },
  {
    "label": "Adelaide (ADL)",
    "value": "ADL"
  },
  {
    "label": "Albuquerque (ABQ)",
    "value": "ABQ"
  },
  {
    "label": "Amman (AMM)",
    "value": "AMM"
  },
  {
    "label": "Amsterdam (AMS)",
    "value": "AMS"
  },
  {
    "label": "Anaheim (SNA)",
    "value": "SNA"
  },
  {
    "label": "Anchorage (ANC)",
    "value": "ANC"
  },
  {
    "label": "Antigua (ANU)",
    "value": "ANU"
  },
  {
    "label": "Arlington (DCA)",
    "value": "DCA"
  },
  {
    "label": "Athens (ATH)",
    "value": "ATH"
  },
  {
    "label": "Atlanta (ATL)",
    "value": "ATL"
  },
  {
    "label": "Auckland (AKL)",
    "value": "AKL"
  },
  {
    "label": "Aurora (DEN)",
    "value": "DEN"
  },
  {
    "label": "Austin (AUS)",
    "value": "AUS"
  },
  {
    "label": "Bakersfield (BFL)",
    "value": "BFL"
  },
  {
    "label": "Baltimore (BWI)",
    "value": "BWI"
  },
  {
    "label": "Bangkok (BKK)",
    "value": "BKK"
  },
  {
    "label": "Barbados (BGI)",
    "value": "BGI"
  },
  {
    "label": "Barcelona (BCN)",
    "value": "BCN"
  },
  {
    "label": "Beijing (PEK)",
    "value": "PEK"
  },
  {
    "label": "Berlin (TXL)",
    "value": "TXL"
  },
  {
    "label": "Borneo (BKI)",
    "value": "BKI"
  },
  {
    "label": "Boston (BOS)",
    "value": "BOS"
  },
  {
    "label": "Brisbane (BNE)",
    "value": "BNE"
  },
  {
    "label": "Bruges (OST)",
    "value": "OST"
  },
  {
    "label": "Brussels (BRU)",
    "value": "BRU"
  },
  {
    "label": "Budapest (BUD)",
    "value": "BUD"
  },
  {
    "label": "Buenos Aires (EZE)",
    "value": "EZE"
  },
  {
    "label": "Buffalo (BUF)",
    "value": "BUF"
  },
  {
    "label": "Cairns (CNS)",
    "value": "CNS"
  },
  {
    "label": "Cancun (CUN)",
    "value": "CUN"
  },
  {
    "label": "Capetown (CPT)",
    "value": "CPT"
  },
  {
    "label": "Caracas (CCS)",
    "value": "CCS"
  },
  {
    "label": "Cayman Islands (GCM)",
    "value": "GCM"
  },
  {
    "label": "Charlotte (CLT)",
    "value": "CLT"
  },
  {
    "label": "Chiang Mai (CNX)",
    "value": "CNX"
  },
  {
    "label": "Chicago (ORD)",
    "value": "ORD"
  },
  {
    "label": "Christchurch (CHC)",
    "value": "CHC"
  },
  {
    "label": "Cincinnati (CVG)",
    "value": "CVG"
  },
  {
    "label": "Cleveland (CLE)",
    "value": "CLE"
  },
  {
    "label": "Colorado Springs (COS)",
    "value": "COS"
  },
  {
    "label": "Columbus (CMH)",
    "value": "CMH"
  },
  {
    "label": "Copenhagen (CPH)",
    "value": "CPH"
  },
  {
    "label": "Corfu (CFU)",
    "value": "CFU"
  },
  {
    "label": "Corpus Christi (CRP)",
    "value": "CRP"
  },
  {
    "label": "Dallas (DFW)",
    "value": "DFW"
  },
  {
    "label": "Darjeeling (IXB)",
    "value": "IXB"
  },
  {
    "label": "Dayton (DAY)",
    "value": "DAY"
  },
  {
    "label": "Delhi (DEL)",
    "value": "DEL"
  },
  {
    "label": "Denver (DEN)",
    "value": "DEN"
  },
  {
    "label": "Detroit (DTW)",
    "value": "DTW"
  },
  {
    "label": "Doha (DOH)",
    "value": "DOH"
  },
  {
    "label": "Dominican Republic (PUJ)",
    "value": "PUJ"
  },
  {
    "label": "Dubai (DXB)",
    "value": "DXB"
  },
  {
    "label": "Dublin (DUB)",
    "value": "DUB"
  },
  {
    "label": "Dunedin (DUD)",
    "value": "DUD"
  },
  {
    "label": "Durban (DUR)",
    "value": "DUR"
  },
  {
    "label": "Edinburgh (EDI)",
    "value": "EDI"
  },
  {
    "label": "Eilat (ETH)",
    "value": "ETH"
  },
  {
    "label": "El Paso (ELP)",
    "value": "ELP"
  },
  {
    "label": "Florence (PSA)",
    "value": "PSA"
  },
  {
    "label": "Fort Worth (DFW)",
    "value": "DFW"
  },
  {
    "label": "Fresno (FAT)",
    "value": "FAT"
  },
  {
    "label": "Geneva (GVA)",
    "value": "GVA"
  },
  {
    "label": "Giza (CAI)",
    "value": "CAI"
  },
  {
    "label": "Goa (GOI)",
    "value": "GOI"
  },
  {
    "label": "Hagåtña (GUM)",
    "value": "GUM"
  },
  {
    "label": "Haifa (HFA)",
    "value": "HFA"
  },
  {
    "label": "Hanoi (HAN)",
    "value": "HAN"
  },
  {
    "label": "Ho Chi Minh City (SGN)",
    "value": "SGN"
  },
  {
    "label": "Hong Kong (HKG)",
    "value": "HKG"
  },
  {
    "label": "Houston (IAH)",
    "value": "IAH"
  },
  {
    "label": "Ibiza (IBZ)",
    "value": "IBZ"
  },
  {
    "label": "Indianapolis (IND)",
    "value": "IND"
  },
  {
    "label": "Istanbul (IST)",
    "value": "IST"
  },
  {
    "label": "Jacksonville (JAX)",
    "value": "JAX"
  },
  {
    "label": "Jaco (SJO)",
    "value": "SJO"
  },
  {
    "label": "Jaipur (JAI)",
    "value": "JAI"
  },
  {
    "label": "Jamaica (MBJ)",
    "value": "MBJ"
  },
  {
    "label": "Jerusalem (TLV)",
    "value": "TLV"
  },
  {
    "label": "Johannesburg (JNB)",
    "value": "JNB"
  },
  {
    "label": "Kansas City (MCI)",
    "value": "MCI"
  },
  {
    "label": "Ko Samui (USM)",
    "value": "USM"
  },
  {
    "label": "Krakow (KRK)",
    "value": "KRK"
  },
  {
    "label": "Kruger National Park (KMI)",
    "value": "KMI"
  },
  {
    "label": "Kuala Lumpur (KUL)",
    "value": "KUL"
  },
  {
    "label": "Kyoto (KIX)",
    "value": "KIX"
  },
  {
    "label": "Las Vegas (LAS)",
    "value": "LAS"
  },
  {
    "label": "Lexington-fayette (LEX)",
    "value": "LEX"
  },
  {
    "label": "Lima (LIM)",
    "value": "LIM"
  },
  {
    "label": "Lisbon (LIS)",
    "value": "LIS"
  },
  {
    "label": "Liverpool (LPL)",
    "value": "LPL"
  },
  {
    "label": "Lombok (LOP)",
    "value": "LOP"
  },
  {
    "label": "London (LHR)",
    "value": "LHR"
  },
  {
    "label": "Long Beach (LAX)",
    "value": "LAX"
  },
  {
    "label": "Los Angeles (LAX)",
    "value": "LAX"
  },
  {
    "label": "Macau (MFM)",
    "value": "MFM"
  },
  {
    "label": "Madrid (MAD)",
    "value": "MAD"
  },
  {
    "label": "Majorca (PMI)",
    "value": "PMI"
  },
  {
    "label": "Marrakesh (RAK)",
    "value": "RAK"
  },
  {
    "label": "Mecca (JED)",
    "value": "JED"
  },
  {
    "label": "Melbourne (MEL)",
    "value": "MEL"
  },
  {
    "label": "Memphis (MEM)",
    "value": "MEM"
  },
  {
    "label": "Miami (MIA)",
    "value": "MIA"
  },
  {
    "label": "Milan (MXP)",
    "value": "MXP"
  },
  {
    "label": "Milwaukee (MKE)",
    "value": "MKE"
  },
  {
    "label": "Minneapolis (MSP)",
    "value": "MSP"
  },
  {
    "label": "Minorca (MAH)",
    "value": "MAH"
  },
  {
    "label": "Mombasa (MBA)",
    "value": "MBA"
  },
  {
    "label": "Monteverde (SJO)",
    "value": "SJO"
  },
  {
    "label": "Montreal (YUL)",
    "value": "YUL"
  },
  {
    "label": "Moscow (DME)",
    "value": "DME"
  },
  {
    "label": "Mumbai (BOM)",
    "value": "BOM"
  },
  {
    "label": "Munich (MUC)",
    "value": "MUC"
  },
  {
    "label": "Muscat (MCT)",
    "value": "MCT"
  },
  {
    "label": "Mykonos (JMK)",
    "value": "JMK"
  },
  {
    "label": "Nashville (BNA)",
    "value": "BNA"
  },
  {
    "label": "New Orleans (MSY)",
    "value": "MSY"
  },
  {
    "label": "New York City (NYC)",
    "value": "NYC"
  },
  {
    "label": "Newark (EWR)",
    "value": "EWR"
  },
  {
    "label": "Newquay (NQY)",
    "value": "NQY"
  },
  {
    "label": "Nice (NCE)",
    "value": "NCE"
  },
  {
    "label": "Normandy (CDG)",
    "value": "CDG"
  },
  {
    "label": "Oakland (OAK)",
    "value": "OAK"
  },
  {
    "label": "Oklahoma City (OKC)",
    "value": "OKC"
  },
  {
    "label": "Omaha (OMA)",
    "value": "OMA"
  },
  {
    "label": "Orlando (MCO)",
    "value": "MCO"
  },
  {
    "label": "Osaka (KIX)",
    "value": "KIX"
  },
  {
    "label": "Paris (CDG)",
    "value": "CDG"
  },
  {
    "label": "Perth (PER)",
    "value": "PER"
  },
  {
    "label": "Petra (AMM)",
    "value": "AMM"
  },
  {
    "label": "Philadelphia (PHL)",
    "value": "PHL"
  },
  {
    "label": "Phoenix (PHX)",
    "value": "PHX"
  },
  {
    "label": "Phuket (HKT)",
    "value": "HKT"
  },
  {
    "label": "Pittsburgh (PIT)",
    "value": "PIT"
  },
  {
    "label": "Plano (DFW)",
    "value": "DFW"
  },
  {
    "label": "Portland (PDX)",
    "value": "PDX"
  },
  {
    "label": "Prague (PRG)",
    "value": "PRG"
  },
  {
    "label": "Puerto Vallarta (PVR)",
    "value": "PVR"
  },
  {
    "label": "Queenstown (ZQN)",
    "value": "ZQN"
  },
  {
    "label": "Quito (UIO)",
    "value": "UIO"
  },
  {
    "label": "Raleigh (RDU)",
    "value": "RDU"
  },
  {
    "label": "Reykjavik (KEF)",
    "value": "KEF"
  },
  {
    "label": "Rio de Janeiro (GIG)",
    "value": "GIG"
  },
  {
    "label": "Riyadh (RUH)",
    "value": "RUH"
  },
  {
    "label": "Rome (FCO)",
    "value": "FCO"
  },
  {
    "label": "Rotorua (ROT)",
    "value": "ROT"
  },
  {
    "label": "Sacramento (SMF)",
    "value": "SMF"
  },
  {
    "label": "Saint Louis (STL)",
    "value": "STL"
  },
  {
    "label": "Saint Petersburg (LED)",
    "value": "LED"
  },
  {
    "label": "Saint-Tropez (NCE)",
    "value": "NCE"
  },
  {
    "label": "Salvador (SSA)",
    "value": "SSA"
  },
  {
    "label": "Salzburg (SZG)",
    "value": "SZG"
  },
  {
    "label": "San Antonio (SAT)",
    "value": "SAT"
  },
  {
    "label": "San Diego (SAN)",
    "value": "SAN"
  },
  {
    "label": "San Francisco (SFO)",
    "value": "SFO"
  },
  {
    "label": "San Jose (SJO)",
    "value": "SJO"
  },
  {
    "label": "San Jose (SJC)",
    "value": "SJC"
  },
  {
    "label": "San Juan (SJU)",
    "value": "SJU"
  },
  {
    "label": "Santa Ana (SNA)",
    "value": "SNA"
  },
  {
    "label": "Santiago (SCL)",
    "value": "SCL"
  },
  {
    "label": "Santorini (ATH)",
    "value": "ATH"
  },
  {
    "label": "Sao Paulo (GRU)",
    "value": "GRU"
  },
  {
    "label": "Seattle (SEA)",
    "value": "SEA"
  },
  {
    "label": "Seoul (ICN)",
    "value": "ICN"
  },
  {
    "label": "Seville (SVQ)",
    "value": "SVQ"
  },
  {
    "label": "Shanghai (PVG)",
    "value": "PVG"
  },
  {
    "label": "Sharm el-Sheikh (SSH)",
    "value": "SSH"
  },
  {
    "label": "Siem Reap (REP)",
    "value": "REP"
  },
  {
    "label": "Singapore (SIN)",
    "value": "SIN"
  },
  {
    "label": "Sorrento (NAP)",
    "value": "NAP"
  },
  {
    "label": "St. Lucia (UVF)",
    "value": "UVF"
  },
  {
    "label": "St. Martin (SXM)",
    "value": "SXM"
  },
  {
    "label": "St. Moritz (ZRH)",
    "value": "ZRH"
  },
  {
    "label": "Stockholm (ARN)",
    "value": "ARN"
  },
  {
    "label": "Sydney (SYD)",
    "value": "SYD"
  },
  {
    "label": "Tampa (TPA)",
    "value": "TPA"
  },
  {
    "label": "Tangier (TNG)",
    "value": "TNG"
  },
  {
    "label": "Tel Aviv (TLV)",
    "value": "TLV"
  },
  {
    "label": "Tenerife (TFS)",
    "value": "TFS"
  },
  {
    "label": "Tokyo (NRT)",
    "value": "NRT"
  },
  {
    "label": "Toronto (YYZ)",
    "value": "YYZ"
  },
  {
    "label": "Trinidad and Tobago (POS)",
    "value": "POS"
  },
  {
    "label": "Tucson (TUS)",
    "value": "TUS"
  },
  {
    "label": "Tulsa (TUL)",
    "value": "TUL"
  },
  {
    "label": "Tunis (TUN)",
    "value": "TUN"
  },
  {
    "label": "Ubud (DPS)",
    "value": "DPS"
  },
  {
    "label": "Vancouver (YVR)",
    "value": "YVR"
  },
  {
    "label": "Venice (VCE)",
    "value": "VCE"
  },
  {
    "label": "Vienna (VIE)",
    "value": "VIE"
  },
  {
    "label": "Virginia Beach (ORF)",
    "value": "ORF"
  },
  {
    "label": "Washington, D.C. (WAS)",
    "value": "WAS"
  },
  {
    "label": "Wellington (WLG)",
    "value": "WLG"
  },
  {
    "label": "Wichita (ICT)",
    "value": "ICT"
  },
  {
    "label": "Willemstad (CUR)",
    "value": "CUR"
  },
  {
    "label": "Zurich (ZRH)",
    "value": "ZRH"
  }
];  
    };
    return  APIservice;
});