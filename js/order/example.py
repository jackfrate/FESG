import time

second = 1

# after 1 second, print 1
def print1():
  time.sleep(second)
  print('1')

def print2():
  print('2')

# what's gonna happen when we run this?
def main():
  print1()
  print2()

main()
