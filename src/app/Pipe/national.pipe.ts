import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'national',
  pure: true
})
export class NationalPipe implements PipeTransform {

  transform(value: String, arg: String): String {
    if (value != "" && value.length == 14) {
      var year = (value.substring(1, 3));
      var month = (value.substring(3, 5));
      var day = (value.substring(5, 7));
      var checkYear = Number(value.substring(0, 1))
      if (checkYear == 2) {
        if (arg == "yy") {
          return `19${year}`
        } else if (arg == "mm") {
          return `${month}`
        } else if (arg == "dd") {
          return `${day}`
        } else return `${day} ${month} 19${year}`
      }
      else if (arg == "yy") {
        return `20${year}`
      } else if (arg == "mm") {
        return `${month}`
      } else if (arg == "dd") {
        return `${day}`
      } else return `${day}/${month}/20${year}`

    } else {
      return ""
    }
  }

}
