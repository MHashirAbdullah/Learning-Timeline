#Decrators are the funtions that takes the other functions as a parameter and change the behaviour of the function without changing its code.
#-->Example Question:
def starting_function(func):
  def wrapper(*args, **kwargs):
    print("Starting the function")
    func(*args, **kwargs)
    return print("function finished")
  return wrapper

@starting_function
def func_running():
  print('..run the function.....')

func_running()

#-->Task:
import time
def check_timing(func):
  def wrapper(*args, **kwargs):
    start = time.time()
    result = func(*args, **kwargs)
    end = time.time()
    print(f'Function took {end-start:.3f}s seconds to execute')
    return result
  return wrapper

@check_timing
def func2():
  time.sleep(2)
  return ('Executed')

func2()

# -->Difference btw *args & **kwargs
#--> *args are for arbitrary number of postitional arguments.
def order_summary(*args, **kwargs):
  print("Order Summary:")
  for order in args:
    print(f"-{order}")

  for key, value in kwargs.items():
    print(f"{key}:{value}")

order_summary("Pizza", "Salad", cheeze=True, size="Large" )


#Generators are iterators, means the yield the output one by one.
# -->next() gives the next value in the generator.
# stop iteration: gives error when itertator have no value
# WE USE FOR LOOP in the generator
def streaming_data():
  for i in range(10):
    yield f"Data shared{i}"
for data in streaming_data():
  print(data)


#-->Task for: Build a thread-safe queue-based task processor (e.g., job scheduler).

import queue
import threading

task_queue =queue.Queue()
def worker():
  while not task_queue.empty():
    task = task_queue.get()
    print(f'Processing {task}')
    time.sleep(1)
    task_queue.task_done()

for i in range(5):
  task_queue.put(f"Job-{i}")

threads = []
for _ in range(3):
  t = threading.Thread(target=worker)
  t.start()
  threads.append(t)

for t in threads:
  t.join()

