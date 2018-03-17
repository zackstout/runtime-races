
import time
nums = []
allTimes = []
avg = 0


def test_time():
    start = int(round(time.time()*1000))
    # print(start)
    for i in range(0, 1000):
        for j in range(0, 1000):
            nums.append(i * 1000 + j)
    end = int(round(time.time()*1000))
    # print(end)
    allTimes.append(end - start)



# It seems that this returns seconds:
# print(time.time())
#
# print(end - start)

for i in range(1,300):
    test_time()

for t in allTimes:
    avg += t/300

print(avg)
