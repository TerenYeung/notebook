#include <iostream>
#include <string>
#include "lib/my_class.h"
using namespace std;
int g_num = 128;
// overload func
static void
printMsg (char ch)
{
  cout << ch << endl;
}

int main(void)
{
  // local obj
  const string name = "teren.gnu"
  // class
  MyClass one;
  // member func
  one.printMsg();
  // using local obj
  cout << g_num << name << endl;
  return (EXIT_SUCCESS);
}
