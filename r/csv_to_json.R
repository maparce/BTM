fileLocation = "/BTM_Cartogram.csv"## place the file address 
library(jsonlite)
df = read.csv(fileLocation)



df[41,]["X"] = 6 ## change SC to the left
df[df$ST_ABBRV == 'HI',]['Y'] = 7
df[df$ST_ABBRV == 'TX',]['Y'] = 7
df[df$ST_ABBRV == 'TX',]['X'] = 2
df[df$ST_ABBRV == 'GA',]['Y'] = 6
df[df$ST_ABBRV == 'PR',]['Y'] = 7
df[df$ST_ABBRV == 'PR',]['X'] = 9
df[df$ST_ABBRV == 'RI',]['Y'] = 3
df[df$ST_ABBRV == 'FL',]['Y'] = 7


daJson = toJSON(df,"columns")
write_json(daJson, paste0(strsplit(fileLocation, ".csv")[1],'.json'))