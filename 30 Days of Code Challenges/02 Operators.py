# https://www.hackerrank.com/challenges/30-operators
mealCost = float(raw_input())
tipPercent = int(raw_input())
taxPercet = int(raw_input())

tip = mealCost * (float(tipPercent) / 100)
tax = mealCost * (float(taxPercet) / 100)
totalCost = int(round(mealCost + tip + tax))
print 'The total meal cost is ' + str(totalCost) + ' dollars.'