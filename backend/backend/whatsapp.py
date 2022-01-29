from twilio.rest import Client 
 
account_sid = 'AC7a0541cfc9fdc654e7d578379ffeded8' 
auth_token = '6ce34acfd9c40766a7326c12a88d93a1' 
client = Client(account_sid, auth_token) 
 
message = client.messages.create( 
                              from_='whatsapp:+14155238886',  
                              body='Hi Senpai',      
                              to='whatsapp:+919920915909' 
                          ) 
 
print(message.sid)