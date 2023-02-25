#!/usr/bin/env python
import pika
import json

# Connect to RabbitMQ server
connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
channel = connection.channel()

# Declare the exchange
channel.exchange_declare(exchange='my_exchange', exchange_type='direct')

# Declare the queue
result = channel.queue_declare(queue='', exclusive=True)
queue_name = result.method.queue

# Bind the queue to the exchange
channel.queue_bind(exchange='my_exchange', queue=queue_name, routing_key='my_routing_key')

def callback(ch, method, properties, body):
    payload = json.loads(body)
    print("Received message:")
    print(payload)
    print()

# Start consuming messages from the queue
channel.basic_consume(queue=queue_name, on_message_callback=callback, auto_ack=True)

print("Waiting for messages...")
channel.start_consuming()
