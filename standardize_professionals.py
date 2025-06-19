import pandas as pd

# Load CA CSV
ca_df = pd.read_csv('C:\DataStore\mayurDESK\ICICI\match\match-app\public\ca_profiles_all.csv')

# Load CPA Excel
cpa_df = pd.read_excel('C:\DataStore\mayurDESK\ICICI\match\match-app\public\icici_cs_list_final.xlsx')

# Standardize CA columns
ca_standard = pd.DataFrame()
ca_standard['name'] = ca_df['name']
ca_standard['city'] = ca_df['city']
ca_standard['state'] = ca_df['state']
ca_standard['profile_url'] = ca_df['profile_url']
ca_standard['services_offered'] = ca_df['services_offered']

# Standardize CPA columns
cpa_standard = pd.DataFrame()
cpa_standard['name'] = cpa_df['Name']
cpa_standard['city'] = cpa_df['City']
cpa_standard['state'] = cpa_df['Organization']  # Use Organization as state placeholder
cpa_standard['profile_url'] = cpa_df['Retrieved Website']
cpa_standard['services_offered'] = cpa_df['Designation']

# Save to new files
ca_standard.to_csv('ca_standardized.csv', index=False)
cpa_standard.to_csv('cpa_standardized.csv', index=False)
