# https://www.hackerrank.com/challenges/30-more-exceptions
#Write your code here
class Calculator():
    def power(self, n, p):
        try:
            if n < 0 or p < 0:
                raise ValueError('n and p should be non-negative')
            return n**p
        except ValueError:
            return 'n and p should be non-negative'
