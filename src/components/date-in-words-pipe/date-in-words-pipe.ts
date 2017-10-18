import {Pipe, PipeTransform} from '@angular/core';

import * as distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

@Pipe({ name: 'dateInWords', pure: true })
export class DateInWordsPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsDistanceInWordsToNow: missing required arguments';

  transform(
    date: string | number | Date,
    options?: {
      includeSeconds?: boolean,
      addSuffix?: boolean,
      locale?: Object
    }
  ): string {
    if (!date) {
        return '';
    } else if (date instanceof Date) {
      return distanceInWordsToNow(date, options);
    } else {
      throw new Error(DateInWordsPipe.NO_ARGS_ERROR);
    }
  }
}