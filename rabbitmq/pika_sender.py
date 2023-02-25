#!/usr/bin/env python
import pika
import json

# Connect to RabbitMQ server
connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
channel = connection.channel()

# Declare the exchange
channel.exchange_declare(exchange='my_exchange', exchange_type='direct')

# Prepare the message payload
payload = {
    'name': 'John Doe',
    'user': 'johndoe',
    'password': '5551234'
}
message = json.dumps(payload)

# Publish the message to the exchange
channel.basic_publish(exchange='my_exchange', routing_key='my_routing_key', body=message)

# Close the connection
connection.close()
