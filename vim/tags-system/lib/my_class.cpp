#include "my_class.h"
// overload func
static void
printMsg(int i)
{
  std::cout << i << std::endl;
}
void MyClass::printMsg(void)
{
  std::cout << "I'm MyClass!" << std::endl;
}
